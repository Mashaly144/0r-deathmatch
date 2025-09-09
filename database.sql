CREATE TABLE
    IF NOT EXISTS deathmatch_profiles (
        id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        player_id VARCHAR(50) UNIQUE,
        photo VARCHAR(255) DEFAULT NULL,
        played_matches INT DEFAULT 0,
        kills INT DEFAULT 0,
        wins INT DEFAULT 0,
        deaths INT DEFAULT 0,
        loses INT DEFAULT 0
    );