#include "stdafx.h"

#include "OGLWidget.h"

#include <QtGui/QMouseEvent>
#include <QtGui/QOpenGLFunctions>


static const char* vsrc = R"(
#version 450

layout (location = 0) in vec3 position;
out vec4 color;

uniform mat4 modelMatrix;
uniform mat4 viewProjMatrix;

void main()
{
    gl_Position = viewProjMatrix * modelMatrix * vec4(position, 1.0); 
    color = vec4(1.0, 1.0, 0.0, 1.0);
}
)";


static const char* fsrc = R"(
#version 450

out vec4 FragColor;
in vec4 color;  

void main()
{
    FragColor = color;
}  
)";


OGLWidget::OGLWidget(QWidget *parent)
    : QOpenGLWidget(parent)
    , vbo(QOpenGLBuffer::VertexBuffer)
    , ibo(QOpenGLBuffer::IndexBuffer)
{
    vshadersrc.append( vsrc );
    fshadersrc.append( fsrc );

    QSurfaceFormat surfaceFormat = this->format();
    surfaceFormat.setVersion(4,5);
    surfaceFormat.setProfile(QSurfaceFormat::CoreProfile);
    this->setFormat(surfaceFormat);
}

OGLWidget::~OGLWidget()
{
    cleanup();
}

void OGLWidget::initializeGL()
{
       const std::vector<GLushort> indices = {// front
                        0, 1, 2,
                        2, 3, 0,
                        // top
                        1, 5, 6,
                        6, 2, 1,
                        // back
                        7, 6, 5,
                        5, 4, 7,
                        // bottom
                        4, 0, 3,
                        3, 7, 4,
                        // left
                        4, 5, 1,
                        1, 0, 4,
                        // right
                        3, 2, 6,
                        6, 7, 3};

    float width, height, depth;
    width = height = depth = 3;
    const std::vector<QVector3D> vertices = {
        // front
        QVector3D(-width / 2.0f, -height / 2.0f,  depth / 2.0f),
        QVector3D(width / 2.0f, -height / 2.0f,  depth / 2.0f),
        QVector3D(width / 2.0f,  height / 2.0f,  depth / 2.0f),
        QVector3D(-width / 2.0f,  height / 2.0f,  depth / 2.0f),
        // back
        QVector3D(-width / 2.0f, -height / 2.0f, -depth / 2.0f),
        QVector3D(width / 2.0f, -height / 2.0f, -depth / 2.0f),
        QVector3D(width / 2.0f,  height / 2.0f, -depth / 2.0f),
        QVector3D(-width / 2.0f,  height / 2.0f, -depth / 2.0f)
    };

    connect(context(), &QOpenGLContext::aboutToBeDestroyed, this, &OGLWidget::cleanup);
    initializeOpenGLFunctions();
    glClearColor(0, 0, 0, 1);

    shaderprogram = new QOpenGLShaderProgram();
    shaderprogram->addShaderFromSourceCode(QOpenGLShader::Vertex, vshadersrc);
    shaderprogram->addShaderFromSourceCode(QOpenGLShader::Fragment, fshadersrc);
    shaderprogram->bindAttributeLocation("position", 0);
    shaderprogram->link();

    shaderprogram->bind();

    vao.create();
    QOpenGLVertexArrayObject::Binder vaoBinder(&vao);

    QOpenGLFunctions *f = QOpenGLContext::currentContext()->functions();

    vbo.create();
    vbo.bind();
    vbo.allocate(vertices.data(), vertices.size() * sizeof(QVector3D));
    vbo.setUsagePattern(QOpenGLBuffer::UsagePattern::StaticDraw);
    f->glEnableVertexAttribArray(0);
    f->glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);
    vbo.release();

    ibo.create();
    ibo.bind();
    ibo.allocate(indices.data(), indices.size() * sizeof(GLushort));
    ibo.setUsagePattern(QOpenGLBuffer::UsagePattern::StaticDraw);
    //ibo.release();

    // move back
    mcamera.setToIdentity();
    mcamera.translate(0, 0, -5);

    mmodel.setToIdentity();

    shaderprogram->release();
}

void OGLWidget::cleanup()
{
    if(shaderprogram == nullptr)
        return;

    makeCurrent();
    delete shaderprogram;
    shaderprogram = 0;
    doneCurrent();
}

void OGLWidget::paintGL()
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_CULL_FACE);

    shaderprogram->bind();
    QOpenGLVertexArrayObject::Binder vaoBinder(&vao);

    shaderprogram->setUniformValue(shaderprogram->uniformLocation("viewProjMatrix"), mproj * mcamera);
    shaderprogram->setUniformValue(shaderprogram->uniformLocation("modelMatrix"), mmodel);

    glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_SHORT, 0);
    shaderprogram->release();
}

void OGLWidget::resizeGL(int w, int h)
{
    mproj.setToIdentity();
    mproj.perspective(45.f, float(w) / h, 0.01f, 1000.0f);
}

void OGLWidget::mousePressEvent(QMouseEvent *event){}
void OGLWidget::mouseMoveEvent(QMouseEvent *event){}