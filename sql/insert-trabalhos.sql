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