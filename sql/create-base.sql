CREATE DATABASE IF NOT EXISTS pclj;

/*
Tipo = Administrador/Professor/Aluno
*/
CREATE TABLE pclj.usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    usuario VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo INT NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT 1,
    /*Dados Avatar*/
    olho VARCHAR(30) ,
    sobrancelha VARCHAR(30) ,
    boca VARCHAR(30) ,
    pele VARCHAR(30) ,
    chapeu_cabelo VARCHAR(30) ,
    acessorio VARCHAR(30) ,
    cor_cabelo VARCHAR(30) ,
    cor_chapeu VARCHAR(30) ,
    barba VARCHAR(30) ,
    cor_barba VARCHAR(30) ,
    roupa VARCHAR(30) ,
    cor_roupa VARCHAR(30) ,
    estampa VARCHAR(30) ,
    
    PRIMARY KEY (id)
);

CREATE TABLE pclj.projetos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao LONGTEXT NOT NULL,
    usuarioId INT NOT NULL,
    capa VARCHAR(255),
    pastaDeArquivos VARCHAR(30),
    
    PRIMARY KEY (id),    
    FOREIGN KEY (usuarioId) REFERENCES pclj.usuarios(id)
);

CREATE TABLE pclj.trabalhos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao LONGTEXT NOT NULL,
    cor VARCHAR(7) NOT NULL,
    pastaDeArquivos VARCHAR(30),

    PRIMARY KEY (id)
);

CREATE TABLE pclj.trabalho_aluno (
    trabalhoId INT NOT NULL,
    usuarioId INT NOT NULL,
    
    PRIMARY KEY (trabalhoId, usuarioId),    
    FOREIGN KEY (trabalhoId) REFERENCES pclj.trabalhos(id),
    FOREIGN KEY (usuarioId) REFERENCES pclj.usuarios(id)
);
