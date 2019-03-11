#ifndef QGLWIDGET_H
#define QGLWIDGET_H



#include <QtWidgets/QWidget>
#include <QtWidgets/QOpenGLWidget>
#include <QtGui/QOpenGLFunctions_4_5_Core>
#include <QtGui/QOpenGLVertexArrayObject>
#include <QtGui/QOpenGLBuffer>
#include <QtGui/QOpenGLShaderProgram>


class OGLWidget 
  : public QOpenGLWidget
  , public QOpenGLFunctions_4_5_Core
{
public:
    OGLWidget(QWidget *parent = 0);
    ~OGLWidget();

protected:
    void cleanup();

    void initializeGL() override;
    void paintGL() override;
    void resizeGL(int w, int h) override;
    void mousePressEvent(QMouseEvent *event) override;
    void mouseMoveEvent(QMouseEvent *event) override;


private:

    QString vshadersrc;
    QString fshadersrc;
    QMatrix4x4 mproj;
    QMatrix4x4 mcamera;
    QMatrix4x4 mmodel;
    QOpenGLShaderProgram *shaderprogram;
    QOpenGLVertexArrayObject vao;
    QOpenGLBuffer vbo;
    QOpenGLBuffer ibo;
};

#endif // QWIDGET_H
