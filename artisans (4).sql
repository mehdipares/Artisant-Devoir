-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 16 mai 2025 à 15:09
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `artisans`
--

-- --------------------------------------------------------

--
-- Structure de la table `artisans`
--

DROP TABLE IF EXISTS `artisans`;
CREATE TABLE IF NOT EXISTS `artisans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `note` decimal(2,1) DEFAULT NULL,
  `ville` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `a_propos` text COLLATE utf8mb4_general_ci,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `site_web` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_top` tinyint(1) DEFAULT NULL,
  `specialiteId` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`),
  KEY `specialiteId` (`specialiteId`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `artisans`
--

INSERT INTO `artisans` (`id`, `nom`, `note`, `ville`, `a_propos`, `email`, `site_web`, `is_top`, `specialiteId`, `createdAt`, `updatedAt`, `image`, `description`) VALUES
(1, 'Boucherie Dumont', 4.5, 'Lyon', NULL, 'boucherie.dumond@gmail.com', '', 0, 1, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(2, 'Au pain chaud', 4.8, 'Montélimar', NULL, 'aupainchaud@hotmail.com', '', 1, 2, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(3, 'Chocolaterie Labbé', 4.9, 'Lyon', NULL, 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, 3, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(4, 'Traiteur Truchon', 4.1, 'Lyon', NULL, 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, 4, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(5, 'Orville Salmons', 5.0, 'Evian', NULL, 'o-salmons@live.com', '', 1, 5, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(6, 'Mont Blanc Eléctricité', 4.5, 'Chamonix', NULL, 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, 6, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(7, 'Boutot & fils', 4.7, 'Bourg-en-bresse', NULL, 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, 7, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(8, 'Vallis Bellemare', 4.0, 'Vienne', NULL, 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, 8, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(9, 'Claude Quinn', 4.2, 'Aix-les-bains', NULL, 'claude.quinn@gmail.com', '', 0, 9, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(10, 'Amitee Lécuyer', 4.5, 'Annecy', NULL, 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, 10, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(11, 'Ernest Carignan', 5.0, 'Le Puy-en-Velay', NULL, 'e-carigan@hotmail.com', '', 0, 11, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(12, 'Royden Charbonneau', 3.8, 'Saint-Priest', NULL, 'r.charbonneau@gmail.com', '', 0, 12, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(13, 'Leala Dennis', 3.8, 'Chambéry', NULL, 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0, 12, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(14, 'C\'est sup\'hair', 4.1, 'Romans-sur-Isère', NULL, 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, 12, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(15, 'Le monde des fleurs', 4.6, 'Annonay', NULL, 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, 13, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(16, 'Valérie Laderoute', 4.5, 'Valence', NULL, 'v-laredoute@gmail.com', '', 0, 14, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. '),
(17, 'CM Graphisme', 4.4, 'Valence', NULL, 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, 15, '2025-04-21 19:57:39', '2025-04-21 19:57:39', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(1, 'Alimentation', '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(2, 'Bâtiment', '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(3, 'Fabrication', '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(4, 'Services', '2025-04-21 19:57:39', '2025-04-21 19:57:39');

-- --------------------------------------------------------

--
-- Structure de la table `specialites`
--

DROP TABLE IF EXISTS `specialites`;
CREATE TABLE IF NOT EXISTS `specialites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `categorieId` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`),
  KEY `categorieId` (`categorieId`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `specialites`
--

INSERT INTO `specialites` (`id`, `nom`, `categorieId`, `createdAt`, `updatedAt`) VALUES
(1, 'Boucher', 1, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(2, 'Boulanger', 1, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(3, 'Chocolatier', 1, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(4, 'Traiteur', 1, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(5, 'Chauffagiste', 2, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(6, 'Electricien', 2, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(7, 'Menuisier', 2, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(8, 'Plombier', 2, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(9, 'Bijoutier', 3, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(10, 'Couturier', 3, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(11, 'Ferronier', 3, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(12, 'Coiffeur', 4, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(13, 'Fleuriste', 4, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(14, 'Toiletteur', 4, '2025-04-21 19:57:39', '2025-04-21 19:57:39'),
(15, 'Webdesign', 4, '2025-04-21 19:57:39', '2025-04-21 19:57:39');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
