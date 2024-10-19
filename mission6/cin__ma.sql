-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 19 Octobre 2024 à 15:43
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
-- Structure de la table `acteur`
--

CREATE TABLE IF NOT EXISTS `acteur` (
  `IDENT_ACTEUR` varchar(100) NOT NULL,
  `NOM` varchar(100) NOT NULL,
  `PRENOM` varchar(100) NOT NULL,
  `DATE_NAISSANCE` date NOT NULL,
  `NB_FILM` int(100) NOT NULL,
  PRIMARY KEY (`IDENT_ACTEUR`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `acteur`
--

INSERT INTO `acteur` (`IDENT_ACTEUR`, `NOM`, `PRENOM`, `DATE_NAISSANCE`, `NB_FILM`) VALUES
('1', 'DURIS', 'ROMAIN', '1974-05-28', 60),
('2', 'EXARCHOPOULOS', 'ADELE', '1993-11-22', 23),
('3', 'BORHINGER', 'RICHARD', '1942-06-16', 132),
('4', 'GALABRU', 'MICHEL', '1922-10-27', 277),
('5', 'PARILLAUD', 'ANNE', '1960-05-06', 35),
('6', 'FORD', 'HARRISON', '1942-06-13', 64),
('7', 'FISHER', 'CARRIE', '1956-10-21', 74),
('8', 'SALDANA', 'ZOE', '1978-06-19', 31),
('9', 'WEAVER', 'SIGOURNEY', '1949-10-08', 66),
('10', 'RENO', 'JEAN', '1948-06-30', 75);

-- --------------------------------------------------------

--
-- Structure de la table `casting`
--

CREATE TABLE IF NOT EXISTS `casting` (
  `IDENT_FILM` varchar(50) NOT NULL,
  `IDENT_ACTEUR` varchar(50) NOT NULL,
  `ROLE` varchar(50) NOT NULL,
  `NB_JOUR_TOURNAGE` int(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `casting`
--

INSERT INTO `casting` (`IDENT_FILM`, `IDENT_ACTEUR`, `ROLE`, `NB_JOUR_TOURNAGE`) VALUES
('1', '1', 'Francois', 100),
('1', '1', 'Julia', 98),
('2', '5', 'NIKITA', 68),
('2', '10', 'VICTOR LE NETTOYEUR ', 9),
('3', '6', 'HAN SOLO', 201),
('3', '7', 'PRINCESSE LEIA', 203),
('4', '8', 'NEYTIRI', 50),
('4', '9', 'Dr . Grace Augustine', 45);

-- --------------------------------------------------------

--
-- Structure de la table `distributeur`
--

CREATE TABLE IF NOT EXISTS `distributeur` (
  `libelle` varchar(100) NOT NULL,
  `ID_distrib` int(100) NOT NULL,
  PRIMARY KEY (`ID_distrib`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `distributeur`
--

INSERT INTO `distributeur` (`libelle`, `ID_distrib`) VALUES
('GAUMONT', 1),
('20th CENTURY FOX ', 2);

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

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `IDENT_PAYS` varchar(100) NOT NULL,
  `LIBELLE` varchar(100) NOT NULL,
  PRIMARY KEY (`IDENT_PAYS`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`IDENT_PAYS`, `LIBELLE`) VALUES
('1', 'FRANCE'),
('2', 'ETATS-UNIS');

-- --------------------------------------------------------

--
-- Structure de la table `realisateur`
--

CREATE TABLE IF NOT EXISTS `realisateur` (
  `IDENT_REALISATEUR` varchar(20) NOT NULL,
  `NOM` varchar(20) NOT NULL,
  `PRENOM` varchar(20) NOT NULL,
  `DATE_NAISSANCE` date NOT NULL,
  `NB_FILM_ECRIT` int(50) NOT NULL,
  `NB_FILM_PRODUIT` int(5) NOT NULL,
  PRIMARY KEY (`IDENT_REALISATEUR`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `realisateur`
--

INSERT INTO `realisateur` (`IDENT_REALISATEUR`, `NOM`, `PRENOM`, `DATE_NAISSANCE`, `NB_FILM_ECRIT`, `NB_FILM_PRODUIT`) VALUES
('1', 'BESSON', 'LUC', '1959-03-18', 40, 99),
('2', 'LUCAS', 'GEORGES', '1944-05-14', 79, 64),
('3', 'CAMERON', 'JAMES', '1954-08-16', 22, 23);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
