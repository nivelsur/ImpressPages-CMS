<?php
/**
 * @package ImpressPages

 *
 */
namespace Ip\Module\Content\Widget;




class IpRichText extends \Ip\Module\Content\Widget{


    public function getTitle() {
        global $parametersMod;
        return $parametersMod->getValue('standard', 'content_management', 'widget_rich_text', 'widget_title');
    }
    
}