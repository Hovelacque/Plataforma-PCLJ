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
    foto VARCHAR(36) ,
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


/*
'SEEDs' 
*/
INSERT INTO pclj.usuarios (`id`,`nome`,`usuario`, `senha`, `tipo`, `olho`, `sobrancelha`, `boca`, `pele`, `chapeu_cabelo`, `acessorio`, `cor_chapeu`, `barba`, `cor_barba`, `roupa`, `cor_roupa`) 
VALUES (1,'Gustavo Geissler Hovelacque','admin','123qwe','1', 'dizzy', 'updown', 'smile', 'light', 'longhair_frida', 'round', 'white', 'moustache_fancy', 'brown', 'hoodie', 'blue2');

														