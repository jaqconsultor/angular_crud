<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Crud extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    public function index($acc="",$tab="")
    { 
        $this->load->view("api_header");
        $data['datos'] = json_encode( array('Error' => -1, 'mensaje' => 'No se Encontro la Funcion') );
        if( $acc == "scr" ) {
            $query = $this->db->get($tab);
            $data['datos'] = json_encode($query->result());
        }
		
		
		/*
		// INSERT
		$data = array(
        'title' => 'My title',
        'name' => 'My Name',
        'date' => 'My date'
		);
		$this->db->insert('mytable', $data);
		*/
		
		
		/*
		// UPDATE
		$data = array(
				'title' => $title,
				'name' => $name,
				'date' => $date
		);

		$this->db->where('id', $id);
		$this->db->update('mytable', $data);

		$this->db->set('field', 'field+1', FALSE);
		$this->db->where('id', 2);
		$this->db->update('mytable'); // gives UPDATE mytable SET field = field+1 WHERE id = 2

		$this->db->set('field', 'field+1');
		$this->db->where('id', 2);
		$this->db->update('mytable'); // gives UPDATE `mytable` SET `field` = 'field+1' WHERE `id` = 2
		*/

		/*
		// DELETE
		$this->db->delete('mytable', array('id' => $id));  /
		*/
		
        $this->load->view("datos", $data);
    }

}