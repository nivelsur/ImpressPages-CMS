<?php
/**
 * @package ImpressPages
 * @copyright   Copyright (C) 2011 ImpressPages LTD.
 * @license GNU/GPL, see ip_license.html
 */
namespace Modules\community\user\widget;

if (!defined('CMS')) exit;



class IpUserRegistration extends \Modules\standard\content_management\Widget{


    public function getTitle() {
        global $parametersMod;
        return $parametersMod->getValue('community', 'user', 'admin_translations', 'registration');
    }
    
    public function previewHtml($instanceId, $data, $layout) {
        global $session;
        global $site;
        global $parametersMod;
        $userZone = $site->getZoneByModule('community', 'user');
        if (!$userZone) {
            return '
            Please create new zone in Developer / zones with associated module group <b>community</b> and module <b>user</b>.
            ';
        }
        
        $registrationForm = \Modules\community\user\Config::getRegistrationForm();
        
        $data = array (
            'registrationForm' => $registrationForm,
            'loggedIn' => $session->loggedIn(),
            'registrationEnabled' => $parametersMod->getValue('community','user','options','enable_registration')
        );
        return parent::previewHtml($instanceId, $data, $layout);
        
    }
}