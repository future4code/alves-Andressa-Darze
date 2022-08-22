```

USE `alves-andressa-darze`;

-- Exercício 1
CREATE TABLE intro_sql_Actor (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
 
/* 
a) VARCHAR(n) - strings de no máximo n caracteres
   DATE - data no formato yyy-mm-dd
*/
-- b)
SHOW DATABASES;
SHOW TABLES;
-- C)
DESCRIBE intro_sql_Actor;

-- Exercício 2
INSERT INTO intro_sql_Actor (id, nome, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);
-- a)
INSERT INTO intro_sql_Actor (id, nome, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
-- b) Ocorre um erro pois a chave primária já existe
INSERT INTO intro_sql_Actor (id, nome, salary, birth_date, gender)
VALUES(
"002",
"Outra pessoa",
1200000,
"1963-08-23",
"female"
);
-- c)
INSERT INTO intro_sql_Actor (id, nome, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19", 
"female"
);
-- d) Coluna não corresponde ao valor inserido
INSERT INTO intro_sql_Actor (id, nome, salary, birth_date, gender)
VALUES(
  "004",
  "Rodrigo",
  400000,
  "1949-04-18", 
  "male"
);
-- e) Dado de data inserido incorretamente (sem ser string)
INSERT INTO intro_sql_Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
-- f)
INSERT INTO intro_sql_Actor (id, nome, salary, birth_date, gender)
VALUES(
  "006", 
  "Wagner Moura",
  719333.33,
  "1979-09-06", 
  "male"
),
(
  "007", 
  "Ísis Valverde",
  557000,
  "1987-06-21", 
  "female"
);

-- Exercício 3
-- a)
SELECT * FROM intro_sql_Actor WHERE gender = "female";
-- b)
SELECT salary FROM intro_sql_Actor WHERE nome = "Tony Ramos";
-- c)
SELECT * FROM intro_sql_Actor WHERE gender = "invalid";
-- d) 
SELECT id, nome, salary FROM intro_sql_Actor WHERE salary <= 500000;
-- e) Não gerou um erro
SELECT id, nome from intro_sql_Actor WHERE id = "002";

-- Exercício 4
-- b)
SELECT * FROM intro_sql_Actor WHERE nome NOT LIKE "A%" AND salary > 350000;
-- c)
SELECT * FROM intro_sql_Actor WHERE nome LIKE "%G%" OR nome LIKE "%g%";
-- d)
SELECT * FROM intro_sql_Actor WHERE (nome LIKE "%G%" OR nome LIKE "%g%" OR nome LIKE "%A%" OR nome LIKE "%a%") AND salary BETWEEN 350000 AND 900000;

-- Exercício 5
-- a)
CREATE TABLE intro_sql_Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
evaluation INT NOT NULL
);

-- b)
INSERT INTO intro_sql_Movie (id, title, sinopse, release_date, evaluation)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
),
(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
),
(
"004",
"2 Coelhos",
"Preso entre a criminalidade e o poder público corrupto, Edgar está cansado dessa vida e planeja fazer justiça com as próprias mãos. Ele executa um plano que coloca criminosos e corruptos em rota de colisão.",
"2012-01-20",
4
);

-- Exercício 6
-- a)
SELECT id, title, evaluation FROM intro_sql_Movie WHERE id = "002";
-- b)
SELECT * FROM intro_sql_Movie WHERE title = "Se Eu Fosse Você";
-- c)
SELECT id, title, sinopse FROM intro_sql_Movie WHERE evaluation >= 7;

-- Exercício 7
-- a)
SELECT * FROM intro_sql_Movie WHERE title LIKE "%Vida%";
-- b)
SELECT * FROM intro_sql_Movie WHERE title LIKE "%anos%" OR sinopse LIKE "%anos%";
-- c)
SELECT * FROM intro_sql_Movie WHERE release_date < CURDATE();
-- d)
SELECT * FROM intro_sql_Movie WHERE release_date < CURDATE() AND evaluation > 7 AND (title OR sinopse) LIKE ("%vida%" OR "%Vida%");

```