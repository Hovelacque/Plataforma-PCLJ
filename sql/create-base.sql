CREATE DATABASE IF NOT EXISTS pclj;

/*
Tipo = Administrador/Professor/Aluno
*/
CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo INT NOT NULL,
    /*Dados Avatar*/
    foto VARCHAR(36) ,
    olho VARCHAR(36) ,
    sobrancelha INT ,
    boca INT ,
    pele INT ,
    chapeu_cabelo INT ,
    acessorio INT ,
    cor_cabelo INT ,
    cor_chapeu INT ,
    barba INT ,
    cor_barba INT ,
    roupa VARCHAR(36) ,
    cor_roupa INT ,
    estampa INT ,
    
    PRIMARY KEY (id)
);