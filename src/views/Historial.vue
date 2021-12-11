<template>

<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>Untitled</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>

<div id="wrapper">
    <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
            
            <div class="container-fluid">
                <div class="card shadow">
                    <div class="card-header py-4">
                        <p class="h4 text-primary"><b>Reporte histórico de servicios facturados</b></p>
                    </div>

                    

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 text-nowrap">
                                <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Mostrar<select class="d-inline-block form-select form-select-sm">
                                            <option value="5" selected>5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                        </select></label></div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                            </div>
                        </div>
    
    <div class="container">
        <div class="row">

            <div class="col-lg-2">   
                <div class="card">
                <div class="card-header">
            <h6 class="mb-0">Fecha a consultar</h6>
            </div>

    <div>
        <div class="card-body"></div><input type="date" name="Fecha a consultar" step="1" min="2021-12-01" max="2023-12-31" /><button class="btn btn-primary" type="button">Filtrar</button>
    </div>
</div>
</div>

 
           

        <div class="col-lg-10">
    


                        <div class="table-responsive table mt-7" id="históricos" role="grid" aria-describedby="dataTable_info" style="overflow-x:auto" align="left">
                            <table class="table table-striped" id="histórico">
                                <thead>
                                                                
                                    <tr>
                                        <th>No. Factura</th>
                                        <th>Placa</th>
                                        <th>Fecha ingreso</th>
                                        <th>Fecha salida</th>
                                        <th>Tiempo de uso</th>
                                        <th>Valor pagado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
  
                        </table>
                        </div>

    </div>
                        <div class="row">
                            <div class="col-md-6 align-self-center">
                                <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Mostar 1 a 10 de 27</p>
                            </div>
                            <div class="col-md-6">
                                <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
        <footer class="bg-white sticky-footer">
            <div class="container my-auto">
                <div class="text-center my-auto copyright"><span>Copyright © DJS Software 2021</span></div>
            </div>
        </footer>
    </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
</div>

</body>
</template>


<style type="text/css">

form {
  font-weight: bold;
  font-size: 20px;

}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}

ol-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }


*, *::before, *::after {
  box-sizing: border-box;
}

</style>
    


