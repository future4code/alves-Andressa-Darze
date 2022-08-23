SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
-- a) Excluiria a coluna "salary" da tabela
-- b) Mudaria o nome da coluna de "gender" para "sex"
-- c) Mudaria o tipo da coluna "gender" de VARCHAR(6) para VARCHAR(255)
-- d)
ALTER TABLE intro_sql_Actor CHANGE gender gender VARCHAR(100);

-- Exercício 2
-- a)
UPDATE intro_sql_Actor
SET 
	nome = "Outro Nome",
    birth_date = "1930-10-10"
WHERE id = "003";

-- b)
UPDATE intro_sql_Actor
SET nome = UPPER(nome)
WHERE nome = "Juliana Paes";

UPDATE intro_sql_Actor
SET nome = "Juliana Paes"
WHERE nome = "Juliana Paes";

-- c)
UPDATE intro_sql_Actor 
SET 
	nome = "Andressa",
    salary = 457000,
    birth_date = "1997-04-26",
    gender = "female"
WHERE id = "005";

-- d) Não tá dando erro
UPDATE intro_sql_Actor 
SET 
	nome = "Andressa",
    salary = "457000",
    birth_date = "1997-04-26",
    gender = "female"
WHERE id = "005";

-- Exercício 3
-- a)
DELETE FROM intro_sql_Actor WHERE nome = "Outro Nome";
-- b)
DELETE FROM intro_sql_Actor WHERE gender = "male"
 AND salary > 1000000;
 
 -- Exercício 4
 -- a)
 select max(salary) from intro_sql_Actor;
 -- b)
 select min(salary) from intro_sql_Actor where gender = "female";
 -- c)
select count(*) from intro_sql_Actor where gender = "female";
-- d)
select sum(salary) from intro_sql_Actor;

-- Exercício 5
-- a) Diz o múmero de elementos que se enquadram nas categorias
select count(*), gender
from intro_sql_Actor
group by gender;

-- b)
select id, nome from intro_sql_Actor where gender = "male" order by nome desc;

-- c)
select * from intro_sql_Actor order by salary asc;

-- d)
select * from intro_sql_Actor order by salary desc limit 3;

-- e)
select avg(salary), gender from intro_sql_Actor
group by gender;

-- Exercício 6
-- a)
alter table intro_sql_Movie 
add playing_limit_date DATE;
-- b)
alter table intro_sql_Movie change evaluation rating float;
-- c)
update intro_sql_Movie
set playing_limit_date = "2021-10-13"
where id = "001";

update intro_sql_Movie
set playing_limit_date = "2022-10-15"
where id = "002";

-- d)
delete from intro_sql_Movie where id = "004";

