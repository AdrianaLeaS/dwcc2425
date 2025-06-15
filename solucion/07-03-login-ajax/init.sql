CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO clientes (nome, email) VALUES ('Juan Perez', 'juan@email.com');
INSERT INTO clientes (nome, email) VALUES ('Maria Lopez', 'maria@email.com');
INSERT INTO clientes (nome, email) VALUES ('Carlos Garcia', 'carlos@email.com');
