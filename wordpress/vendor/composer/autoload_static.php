<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1e1228af27295c7e05e4e2a53ee5694a
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1e1228af27295c7e05e4e2a53ee5694a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1e1228af27295c7e05e4e2a53ee5694a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
