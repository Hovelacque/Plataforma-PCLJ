INSERT INTO `trabalhos` 
(`id`, `cor`, `pastaDeArquivos`, `nome`, `descricao`) 
VALUES 
(1, '#35aeae', 'anime_nome', 'Anime seu nome', 'O objetivo era fazer uma animação com as letras dos seu nome, e ao clicar nelas gerar alguma interação'),
(2, '#fba326', 'anime_multiplicacao', 'Anime uma multiplicação', 'O objetivo era mostrar os mecanismos usados para multiplicar e controlar objetos no programa Scratch, conhecimento que auxiliará nos próximos trabalhos'),
(3, '#90d114', 'jogo_quebra_blocos', 'Jogo estilo pong', 'O objetivo era construir um jogo no estilo do jogo clássico PONG, com uma bolinha e coisas para rebater'),
(4, '#f12a8c', 'jogo_proprio', 'Criando seu jogo', 'Foi passada uma base de jogo de perseguição mas a idéia era deixar a imaginação fluir e criar seu jogo autoral'),
(5, '#f97c28', 'anime_pclj', 'Anime P.C.L.J.', 'P.C.L.J. é a empresa criada em parceria com os alunos nas aulas de Inovação social cientifica e tecnologica, o objetivo era desenvolver uma animação com o nome do projeto'),
(6, '#4c6acc', 'jogo_digitacao', 'Jogo de digitação', 'Durante as aulas de Informática Básica utilizamos alguns jogos que ajudam no processo de aprendizado e treino de digitação, o objetivo era cada aluno criar seu próprio jogo e posteriormente compartilhar com os colegas aumentando o engajamento na aprendizagem. OBS: É necessário o uso de teclado'),
(7, '#a74de8', 'leitor_mentes', 'Leitor de mentes', 'Este trabalho nasceu de uma mágica que utiliza lógica para adivinhar o que o espectador escolheu mentalmente, usando esta lógica e princípios de programação desenvolvemos algumas cartas fisicas e digitais tornando o processo muito mais legal e divertido')

-- Trabalho anime_nome
INSERT INTO `trabalho_aluno` (`trabalhoId`, `usuarioId`) VALUES
(1, 10),
(1, 11),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 23),
(1, 24),
(1, 25),
(1, 27),
(1, 28),
(1, 29),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8)

-- Trabalho anime_multiplicacao
INSERT INTO `trabalho_aluno` (`trabalhoId`, `usuarioId`) VALUES
(2, 10),
(2, 13),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 22),
(2, 24),
(2, 27),
(2, 28),
(2, 29),
(2, 3),
(2, 4),
(2, 6),
(2, 7),
(2, 9)

-- Trabalho jogo_quebra_blocos
INSERT INTO `trabalho_aluno` (`trabalhoId`, `usuarioId`) VALUES
(3, 10),
(3, 11),
(3, 13),
(3, 14),
(3, 15),
(3, 16),
(3, 17),
(3, 18),
(3, 19),
(3, 20),
(3, 22),
(3, 23),
(3, 24),
(3, 27),
(3, 28),
(3, 29),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 9)

-- Trabalho jogo_proprio
INSERT INTO `trabalho_aluno` (`trabalhoId`, `usuarioId`) VALUES
(4, 10),
(4, 11),
(4, 13),
(4, 15),
(4, 16),
(4, 17),
(4, 20),
(4, 22),
(4, 23),
(4, 24),
(4, 27),
(4, 29),
(4, 4),
(4, 7),
(4, 8),
(4, 9),
(4, 14)

-- Trabalho anime_pclj
INSERT INTO `trabalho_aluno` (`trabalhoId`, `usuarioId`) VALUES
(5, 10),
(5, 11),
(5, 13),
(5, 14),
(5, 16),
(5, 18),
(5, 19),
(5, 23),
(5, 24),
(5, 25),
(5, 27),
(5, 28),
(5, 4),
(5, 6),
(5, 7),
(5, 8),
(5, 9)

-- Trabalho jogo_digitacao
INSERT INTO `trabalho_aluno` (`trabalhoId`, `usuarioId`) VALUES
(6, 10),
(6, 13),
(6, 14),
(6, 16),
(6, 17),
(6, 18),
(6, 19),
(6, 22),
(6, 23),
(6, 24),
(6, 27),
(6, 28),
(6, 4),
(6, 5),
(6, 7),
(6, 8),
(6, 9)