-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze
create table Case2_Competitions(
    id varchar(255) primary key,
    name varchar(255) not null,
    modality enum('100 metros rasos', 'Lançamento de dardos') not null,
    unit varchar(255) not null,
    status enum('Em andamento', 'Encerrada') not null
);

select * from `Case2_Competitions`;


create table Case2_Results_Rasos(
    id varchar(255) primary key,
    competition varchar(255) not null,
    athlete varchar(255) not null,
    value float not null
);

select * from `Case2_Results_Rasos`;

create table Case2_Results_Dardos(
    id varchar(255) primary key,
    competition varchar(255) not null,
    athlete varchar(255) not null,
    value float not null
);

select * from `Case2_Results_Dardos`;


-- drop table `Case2_Results_Dardos`;
-- drop table `Case2_Results_Rasos`

 select competition, athlete, max(value) from `Case2_Results_Dardos` where competition = "Classificatoria lançamento de dardos" group by athlete order by max(value) desc;


select competition, athlete, value from `Case2_Results_Rasos` where competition = "Classificatoria 100m rasos" order by value ASC;
