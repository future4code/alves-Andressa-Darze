-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze
create table Case2_Competitions(
    id varchar(255) primary key,
    name varchar(255) not null,
    modality enum('100 metros rasos', 'Lançamento de dardos') not null,
    unit varchar(255) not null,
    status enum('Em andamento', 'Encerrada') not null
);

select * from `Case2_Competitions`;

