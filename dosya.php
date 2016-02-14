<?php

include "Classes/PHPExcel/IOFactory.php";



try {



    $inputFile = 'a.xlsx';
    $objPhpExcel = PHPExcel_IOFactory::load($inputFile);
    $rows = $objPhpExcel->getActiveSheet()->toArray(null, true, true, true);

    $i=0;
    $data_en=array();
    $data_tr=array();
    $word=array();
    foreach ($rows as $row)
    {
        $i++;
        $data_en[$i] = $row['C'];
        $data_tr[$i]= $row['D'];
        $data_en_tr[$i-1]=$data_en[$i]."=".$data_tr[$i];




    }
    $lenght=count($data_en_tr);
    $random=rand(0,$lenght);
    echo $data_en_tr[$random];





}
catch(PHPExcel_Exception $e)
{
    echo $e->getMessage();
}

