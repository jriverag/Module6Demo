function CreateCustomer()
{
    var objrequest = new XMLHttpRequest();
    
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '"}';
    
    objrequest.onreadystatechange = function()
    {
        if (objrequest.readyState == 4 && objrequest.status == 200)
        {
            var result = JSON.parse(objrequest.responseText);
            OperationResult(result);
        }
    }
    
    objrequest.open("POST",url,true);
    objrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objrequest.send(newcustomer);
    
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}