CREATE TABLE User (
	id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password TEXT NOT NULL 
);

CREATE TABLE TypeTransaction (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nameTransaction VARCHAR(20) NOT NULL
);

INSERT INTO TypeTransaction (nameTransaction) VALUES ('DÉBITO'), ('CRÉDITO');

CREATE TABLE BankTransaction (
	id INT PRIMARY KEY AUTO_INCREMENT,
    idUser INT NOT NULL, 
    idTypeTransaction INT NOT NULL,
    dateTransaction DATETIME DEFAULT CURRENT_TIMESTAMP, 
    valueTransaction DOUBLE NOT NULL,
    FOREIGN KEY (idUser) REFERENCES user (id),
    FOREIGN KEY (idTypeTransaction) REFERENCES typeTransaction (id)
);