// QtApplication_test.cpp: Definiert den Einstiegspunkt für die Konsolenanwendung.
//

#include "stdafx.h"


#include "mainwindow.h"
#include <QtWidgets/QApplication.h>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    return a.exec();
}

