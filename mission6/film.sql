-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 18 Octobre 2024 à 17:04
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `cinéma`
--

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `IDENT_FILM` varchar(100) NOT NULL,
  `TITRE` varchar(100) NOT NULL,
  `GENRE1` varchar(100) NOT NULL,
  `GENRE2` varchar(100) NOT NULL,
  `DATE_SORTIE` date NOT NULL,
  `PAYS` varchar(100) NOT NULL,
  `IDENT_REALISATEUR` varchar(100) NOT NULL,
  `DUREE` varchar(100) NOT NULL,
  `ID_distrib` int(100) NOT NULL,
  PRIMARY KEY (`IDENT_FILM`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`IDENT_FILM`, `TITRE`, `GENRE1`, `GENRE2`, `DATE_SORTIE`, `PAYS`, `IDENT_REALISATEUR`, `DUREE`, `ID_distrib`) VALUES
('1', 'SUBWAY', 'POLICIER', 'DRAME', '1985-04-10', '1', '1', '104', 1),
('2', 'NIKITA', 'DRAME', 'ROMANTIQUE', '1990-02-21', '1', '1', '118', 1),
('3', 'STRA WARS 6 / LE RETOUR DU JEDI', 'ACTION', 'SF', '1983-10-19', '2', '2', '133', 2),
('4', 'AVATAR', 'ACTION', 'SF', '2009-10-16', '2', '3', '170', 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
