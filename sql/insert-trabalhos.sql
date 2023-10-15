INSERT INTO `trabalhos` 
(`id`, `cor`, `nome`, `descricao`) 
VALUES 
(1, '#35aeae', 'Anime seu nome', 'O objetivo era fazer uma animação com as letras dos seu nome, e algo clicar nelas gerar alguma interação'),
(2, '#fba326', 'Anime uma multiplação', 'O objetivo era mostrar os mecanismos usados para multiplicar e controlar objetos no programa Scratch, conhecimento que auxiliará nos próximos trabalhos'),
(3, '#90d114', 'Jogo estilo pong', 'O objetivo era construir um jogo no estilo do jogo clássico PONG, com uma bolinha e coisas para rebater'),
(4, '#f12a8c', 'Criando seu jogo', 'Foi passada uma base de jogo de perseguição mas a idéia era deixar a imaginação fluir e criar seu jogo autoral'),
(5, '#f97c28', 'Anime P.C.L.J.', 'P.C.L.J. é a empresa criada em parceria com os alunos nas aulas de Inovação social cientifica e tecnologica, o objetivo era desenvolver uma animação com o nome do projeto'),
(6, '#4c6acc', 'Jogo de digitação', 'Durante as aulas de Informática Básica utilizamos alguns jogos que ajudam no processo de aprendizado e treino de digitação, o objetivo era cada aluno criar seu próprio jogo e posteriormente compartilhar com os colegas aumentando o engajamento na aprendizagem'),
(7, '#a74de8', 'Leitor de mentes', 'Este trabalho nasceu de uma mágica que utiliza lógica para adivinhar o que o espectador escolheu mentalmente, usando esta lógica e princípios de programação desenvolvemos algumas cartas fisicas e digitais tornando o processo muito mais legal e divertido')


INSERT INTO `trabalho_aluno` 
(`trabalhoId`, `usuarioId`, `pastaDeArquivos`) 
VALUES 
(1, 3, '123'),
(1, 4, '234'),
(1, 5, '345'),
(1, 7, '123'),
(1, 11, '234'),
(1, 23, '345'),
(1, 17, '123'),
(1, 15, '234'),
(1, 18, '345'),
(1, 28, '123'),
(1, 27, '234'),
(1, 29, '345'),
(1, 1, '123')