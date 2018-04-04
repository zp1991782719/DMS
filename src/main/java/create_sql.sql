DROP TABLE IF EXISTS 'dms_user';
CREATE TABLE 'dms_user' (
  'user_id' int(11) NOT NULL AUTO_INCREMENT,
  'user_username' varchar(20),
  'user_password' varchar(20),
  'user_name' varchar(100)
  PRIMARY KEY ('dms_user_id')
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;