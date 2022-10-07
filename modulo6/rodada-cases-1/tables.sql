-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze
create table if not exists Case1_Products(
    id varchar(255) primary key,
    name varchar(255) not null
);

create table if not exists Case1_Tags_Products(
    product_id varchar(255) not null,
    tag varchar(255) not null,
    foreign key (product_id) references Case1_Products(id)
);

