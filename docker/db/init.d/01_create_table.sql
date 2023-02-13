CREATE TABLE todos (
  id INT NOT NULL AUTO_INCREMENT,
  todo varchar(100) NOT NULL,
  status varchar(100) NOT NULL,
  is_deleted tinyint(1) DEFAULT 0,
  expired_at datetime NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT NULL,
  PRIMARY KEY (id)
);
