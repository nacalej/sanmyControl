CREATE TABLE IF NOT EXISTS `users` (
  `id` int(12)  AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50),
  `macAddress` varchar(17) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`macAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `rentalwifi` (
  `id` int(12) AUTO_INCREMENT,
  `time` varchar(20) NOT NULL,
  `amountRentalWifi` float NOT NULL,
  `typeOfPay` varchar(15) NOT NULL,
  `paymentId` int(25),
  `dateRentalWifi` datetime NOT NULL,
  `enDateRentalWifi` datetime,
  `addressUser` varchar(17) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`addressUser`) references users(`macAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;