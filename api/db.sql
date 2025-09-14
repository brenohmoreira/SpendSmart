CREATE TABLE User (
  id int(11) primary key AUTO_INCREMENT NOT NULL,
  name varchar(50) NOT NULL,
  email varchar(100) NOT NULL,
  password text NOT NULL
) 

CREATE TABLE TypeTransaction (
  id int(11) primary key AUTO_INCREMENT NOT NULL,
  nameTransaction varchar(20) NOT NULL
) 

INSERT INTO TypeTransaction (id, nameTransaction) values (1, 'DÉBITO'), (2, 'CRÉDITO')

CREATE TABLE Transaction (
  id int(11) primary key AUTO_INCREMENT NOT NULL,
  idUser int(11) NOT NULL,
  idTypeTransaction int(11) NOT NULL,
  dateTransaction datetime DEFAULT current_timestamp(),
  valueTransaction double NOT null,
  direction VARCHAR(255) not null,
  foreign key (idUser) references User (id),
  foreign key (idTypeTransaction) references Transaction (id)
) 