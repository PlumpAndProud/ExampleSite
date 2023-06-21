<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', '123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OCMQ%$u^JFb{ugPg$c.zR[%t@Y,%5.<a|Y-[yJ(6T~:Xa:a_+-8YE%_m)H28N{M@' );
define( 'SECURE_AUTH_KEY',  '&G)tvPt0+g|r^{Cyi x*gc{/lY0IJ~L_`=;oy`^w_`r$}J835C!4Mi&KAnWVE7mK' );
define( 'LOGGED_IN_KEY',    'dN*o<)U)~F.RdsdxWc*ky$(MCCb-(D}-[XX_fzP9s=UoDWx213t*ly4?:3=i)<,m' );
define( 'NONCE_KEY',        '}FE6uiC.4gZ*-HK8d]P.`Y>xwgqc?]62OG{k%=;Vw2QKgC -xq^6Bpz_`j_a+Qtq' );
define( 'AUTH_SALT',        ';J/jIz4<{]z_A-)gpWHNBxU2`pXet@=5&=2+hnE/&<{^[y+HLKDlJVvP@gD>,%T9' );
define( 'SECURE_AUTH_SALT', 'c.73?-Wi,|-qR(sng`;GJIBo.C=he@{v_9aCdYPI`i$@;Nos}O]5Ez]Vuf>e*[N)' );
define( 'LOGGED_IN_SALT',   'CO/%>zcdp<*)@)k]y$H3Z.U`c?BWtxbjS-&Fj<9-@UY^)bv(XmDo/%y)18y]KN]s' );
define( 'NONCE_SALT',       'HnkRB`&78%Z@qXj]qWU-|z&?F3FWwnK&exQ6MBUL.6?S)wV9)% IXISa>,41IvlG' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
