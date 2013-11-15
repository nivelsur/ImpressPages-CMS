<?php
/**
 * @package ImpressPages
 *
 *
 */

namespace Ip\Response;

/**
 *
 * Event dispatcher class
 *
 */
class Json extends \Ip\Response {

    public function __construct($data)
    {
        $this->setContent($data);
        parent::__construct();
    }

    public function send()
    {
        $this->addHeader('Content-type: text/json; charset=utf-8');
        $this->content = json_encode($this->utf8Encode($this->content));
        parent::send();
    }

    /**
     *
     *  Returns $dat encoded to UTF8
     * @param mixed $dat array or string
     */
    private function utf8Encode($dat)
    {
        if (is_string($dat)) {
            if (mb_check_encoding($dat, 'UTF-8')) {
                return $dat;
            } else {
                return utf8_encode($dat);
            }
        }
        if (is_array($dat)) {
            $answer = array();
            foreach($dat as $i=>$d) {
                $answer[$i] = $this->utf8Encode($d);
            }
            return $answer;
        }
        return $dat;
    }
}