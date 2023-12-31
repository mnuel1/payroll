-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 06:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payroll_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` INT(12) NOT NULL,
  `user_num` VARCHAR(100) NOT NULL,  
  `tin` VARCHAR(20) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `middlename` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `birthdate` DATE NOT NULL,
  `contact` VARCHAR(13) NOT NULL,
  `registered_address` VARCHAR(100) NOT NULL,
  `zip_code` VARCHAR(12) NOT NULL,
  `foreign_address` VARCHAR(100) NOT NULL,
  `email_address` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `signature` BLOB NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `user_num`, `tin`, `firstname`, `middlename`, `lastname`, `birthdate`, `contact`, `registered_address`, `zip_code`, `foreign_address`, `email_address`, `password`, `signature`, `createdAt`) VALUES
(2, '55984b7d-9155-4fa2-a9a1-4ca296036976', '111-222-333', 'Mark Louis', 'Ayaay', 'Bernardo', '2023-12-26', '12345678910' , '145 del pilar st. maysilo malabon city', 1477, '', 'marlouismark@gmail.com', '$2b$10$P.GTAP9rt/OkAuyhMa1wu.Q6pHEeH/hTCrCg2sni1Jroj5TZEEIMm', 0x89504e470d0a1a0a0000000d49484452000000410000003f0806000000bfdfa5f4000000017352474200aece1ce90000058349444154785ee55b3ba82545103d0f0c3630d4c06051c1443470b315143510343251d040540c3614230d0435103453c44c50230305850ddc6c15cd3553586137d860410341030341dfb94c3fceab5bdd5d3dd33d73591b1e3ceeede9cfa95355a77afa1ee1f0da8b00aec9dff0151e0d9fa16d824f8e374f10d85e02f069dbe3f37a1f0a088f02200077c936fe57205c064010b43d76fcd9b7f3ecdafed4964c20ed697d6ddc3819c098b05adb02048ffaabc6008bee9a20d0df69794b7d5a9dd65f8dfe5b81f03180971d7e73e3f4ff4ddb6826d0fa9f0338efec92e98f0cd8bc8d04810030f26bda4b1b7efbf89fb736dffdb480912078a98fd3fe02e0de430180eb18058297fe38df7500670f098091205c75dce02082a06780114c7817c06b8e081a95051873be02703f80bf007cd01a6f4680f02380070404ea0002304205527330f6d8d614787b836083e1df009e1c288472c1b74981f604c1b3cac8428829f64da1c03f006e310cbc3b12847b8260ad32b214f6ea8fe7005c30b23c64845e203c3b29c304fcc84ce0d5200970cbc6d03a7a81f00580a7857a210b44a86afa70931701dc2a9feb460910d3736a0cc65597e801829d788420ca55a0def98375cbaa4112084b0e37ad3a6c4a4f0136e400f815c0e34eeab501b3ba1e82a0969c13cceca43dd8a5d87c0fe02143f1cf0a82c81aa5ea125cb03e34a7bc55fa55270c585ebb58802381ce06698ec7b890156bc96aaaf58b0f389bf8573e9b036209171dfb0f00e782caf33700b7c9c0211014f1aa0fc9e0a429e99a5acbb3355234fbb60c680bb8a29b2726d8fc1a65c3c878a02f625add4c195495d01ac414bd4b93e62f59cb02c76095de1ed5ac5cfbdea6dd1686d9673957314d2a088a3c1fbc01e08ecc6abda3b3287b6a00f0fbf701bc12f56933a007423163e9975f0378ca0c98f3252b487a06c4a5bac382505d9b82e05581de59808d03adfe5a628267c58701fc10a1cfd4c78ef12580674acf2b0825699a4e856c36e80900d76919d6120b749f7f4a7df1d3945ab338585fa99dd458165475f9020b4684516ef86f003c317d5935941730ec463916077ade68829ed98073e8c2ab11bd02ae8d2be1ec90c6cdb90569a567873d6b84663fae80d0141c731bc901314219724ccbbe57a734d9e04d7b5dc3354dc99aa5d7683d3501576f656e0f96d9f89695ceb5c9d299bebac1ef006e5f62a28ab8a906b286b9436ca881c0f9ac7fb5547391f55a57a88a9bc8a0539f101be680c0f1e7e66fbb7e02fc338033f2c59c839d122e55364440f05226275d1a17bce0dbdbd53c26efa5cb0808b9b73c2cb01e0c1e72780cf0aeeef4d61e695e2d0ef744580404adcdb9c8176447f45fba46eb7bc69c20ab1e8f37c403edaa716dcf783510acf262ff2b00ee91195aafddd9fa230dd553827b58a9223d15776a20a8c5128d72428a8c20336aacb0f278a9448e92237ba05c0341e38166849c9062c9cb1a230784572a7fe75ceb8b6eacb55f1265a7b4480d048d075eeab2a7515c54e93ec2da6fae2d486ad413f76b0121e7b3a4d987e6fd60ee82a6cd343dd5618415ea122746add50efa72b3d6977705ec412bf3fe47d3250d7b8b3db1665446f04051269e28d3d2c614b588c56a95a7b7a8d119c1d327c9b0277aa104c29c17322d402c39398a503fd7672f38964050ff6dd1f304e20d00f765aef372715b01c0b9b56cdfedbf74a8128d0725ab1010bad59d531ae46dd6771a4f8f9758dd7b568dbb3bc98e80f01e80d77baf64c3f1c8c247a6f9770ccf81a0f1a0c51536dc5b786a0df83b0198032189a4485608cf7e201d354dee629307824adb9ea73c0782c1ee9737e9166c16047585b5f3f81a4029083ba65b26280b6e465720c8b6883bb22068c1d4eb1c710debb6ce71ea7a9282b0e46648eb22b6ee9ff6bae70e8acecd961673c5d4ee87e9ca84a4fb798eb8ca0fb5b7a6439aff3f29cd5c6ff66177eb0000000049454e44ae426082, '2023-12-26 05:07:29');


-- --------------------------------------------------------

--
-- Table structure for table `user_voucher_payroll`
--

CREATE TABLE `user_voucher_payroll` (
  `id` INT(12) NOT NULL,
  `control_no` VARCHAR(250) NOT NULL,
  `voucher` BLOB NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_address` (`email_address`);

--
-- Indexes for table `user_voucher_payroll`
--
ALTER TABLE `user_voucher_payroll`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_voucher_payroll`
--
ALTER TABLE `user_voucher_payroll`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
