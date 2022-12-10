-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze
create table Case2_Competitions(
    id varchar(255) primary key,
    name varchar(255) not null,
    modality enum('100 metros rasos', 'Lançamento de dardos') not null,
    unit varchar(255) not null,
    status enum('Em andamento', 'Encerrada') not null
);

create table Case2_Results_Rasos(
    id varchar(255) primary key,
    competition varchar(255) not null,
    athlete varchar(255) not null,
    value float not null
);

create table Case2_Results_Dardos(
    id varchar(255) primary key,
    competition varchar(255) not null,
    athlete varchar(255) not null,
    value float not null
);


select * from `Case2_Competitions`;
select * from `Case2_Results_Rasos`;
select * from `Case2_Results_Dardos`;

