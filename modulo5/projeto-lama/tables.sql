-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze
create table Lama_Users(
    id varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null UNIQUE,
    password varchar(255) not NULL,
    role enum('NORMAL', 'ADMIN') default "NORMAL" not null
);

create table Lama_Shows(
    id varchar(255) primary key,
    band varchar(255) not null,
    starts_at date not null
);

create table Lama_Tickets(
    id varchar(255) primary key,
    show_id varchar(255) not null,
    user_id varchar(255) not null,
    foreign key (show_id) references Lama_Shows(id),
    foreign key (user_id) references Lama_Users(id)
);

select * from `Lama_Users`;

select * from `Lama_Shows`;

select * from `Lama_Tickets`;