-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2026 at 02:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agenda_telefonica`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacte`
--

CREATE TABLE `contacte` (
  `ID` int(11) NOT NULL,
  `Nume` varchar(100) NOT NULL,
  `Prenume` varchar(100) NOT NULL,
  `Nr_telefon` varchar(20) NOT NULL,
  `Adresa` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contacte_grupuri`
--

CREATE TABLE `contacte_grupuri` (
  `ID` int(11) NOT NULL,
  `Contact_ID` int(11) NOT NULL,
  `Grup_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `grupuri`
--

CREATE TABLE `grupuri` (
  `ID` int(11) NOT NULL,
  `Nume` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacte`
--
ALTER TABLE `contacte`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `contacte_grupuri`
--
ALTER TABLE `contacte_grupuri`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Contact_ID` (`Contact_ID`),
  ADD KEY `Grup_ID` (`Grup_ID`);

--
-- Indexes for table `grupuri`
--
ALTER TABLE `grupuri`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacte`
--
ALTER TABLE `contacte`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contacte_grupuri`
--
ALTER TABLE `contacte_grupuri`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `grupuri`
--
ALTER TABLE `grupuri`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contacte_grupuri`
--
ALTER TABLE `contacte_grupuri`
  ADD CONSTRAINT `contacte_grupuri_ibfk_1` FOREIGN KEY (`Contact_ID`) REFERENCES `contacte` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contacte_grupuri_ibfk_2` FOREIGN KEY (`Grup_ID`) REFERENCES `grupuri` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
