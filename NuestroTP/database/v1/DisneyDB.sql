USE [master]
GO
/****** Object:  Database [DisneyDB]    Script Date: 26/4/2023 10:13:43 ******/
CREATE DATABASE [DisneyDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DAI-Pizzas', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-Pizzas.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DAI-Pizzas_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-Pizzas_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DisneyDB] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DisneyDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DisneyDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DisneyDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DisneyDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DisneyDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DisneyDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [DisneyDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DisneyDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DisneyDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DisneyDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DisneyDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DisneyDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DisneyDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DisneyDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DisneyDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DisneyDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DisneyDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DisneyDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DisneyDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DisneyDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DisneyDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DisneyDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DisneyDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DisneyDB] SET RECOVERY FULL 
GO
ALTER DATABASE [DisneyDB] SET  MULTI_USER 
GO
ALTER DATABASE [DisneyDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DisneyDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DisneyDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DisneyDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DisneyDB] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DisneyDB', N'ON'
GO
ALTER DATABASE [DisneyDB] SET QUERY_STORE = OFF
GO
USE [DisneyDB]
GO
/****** Object:  User [Pizzas]    Script Date: 26/4/2023 10:13:43 ******/
CREATE USER [Pizzas] FOR LOGIN [Pizzas] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 26/4/2023 10:13:43 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO
/****** Object:  Table [dbo].[PeliSeire]    Script Date: 26/4/2023 10:13:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliSeire](
	[idPeliSerie] [int] NOT NULL,
	[Imagen] [varchar](max) NULL,
	[Titulo] [varchar](50) NOT NULL,
	[FechaCreacion] [date] NOT NULL,
	[Calificacion] [int] NULL,
 CONSTRAINT [PK_PeliSeire] PRIMARY KEY CLUSTERED 
(
	[idPeliSerie] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PeliSerie]    Script Date: 26/4/2023 10:13:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliSerie](
	[d] [nchar](10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 26/4/2023 10:13:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[idPersonaje] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
	[Imagen] [varchar](max) NULL,
	[Edad] [int] NULL,
	[Peso] [float] NULL,
	[Historia] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Pizzas] PRIMARY KEY CLUSTERED 
(
	[idPersonaje] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajeXPeliSeire]    Script Date: 26/4/2023 10:13:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajeXPeliSeire](
	[idPelicula] [int] NOT NULL,
	[idPeliSerie] [int] NOT NULL,
	[NombrePeliSerie] [int] NOT NULL,
	[NombrePersonaje] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajeXPeliSerie]    Script Date: 26/4/2023 10:13:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajeXPeliSerie](
	[idPelicula] [int] NOT NULL,
	[idSerie] [int] NULL,
 CONSTRAINT [PK_PersonajeXPeliSeire] PRIMARY KEY CLUSTERED 
(
	[idPelicula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [DisneyDB] SET  READ_WRITE 
GO
