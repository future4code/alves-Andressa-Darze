-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze

create table Labook_Users(
    id varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null UNIQUE,
    password varchar(255) not NULL,
    role enum('NORMAL', 'ADMIN') default "NORMAL" not null
);


create table Labook_Posts(
    id varchar(255) primary key,
    content varchar(255) not null,
    user_id varchar(255),
    foreign Key (user_id) references Labook_Users(id)
);

create table Labook_Likes(
    id varchar(255) primary key,
    post_id varchar(255),
    user_id varchar(255),
    foreign key (post_id) references Labook_Posts(id),
    foreign key (user_id) references Labook_Users(id)
);

select * from `Labook_Users`;

select * from `Labook_Posts`;
