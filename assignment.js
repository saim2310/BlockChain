employee=[

    employee1=
    {
        id:123,
        fname:"saim",
        lname:"rafi",
        sal:10000
    
    },
    employee2=
    {
        id:1234,
        fname:"jahangir",
        lname:"naseer",
        sal:20000
    
    },
    employee3=
    {
        id:12345,
        fname:"hassan",
        lname:"zafar",
        sal:30000
    
    }
    ]
    var i;
    class employees {
        constructor(id,fname,lname,sal)     {
            this.id=id;
            this.fname=fname;
            this.lname=lname;
            this.sal=sal;
        }
    
    getId(id)
    {
        for(i=0;i<employee.length;i++)
        {
            if(employee[i].id==id)
            {
                console.log(employee[i].id);
            }
        }
    }
    getfname(id)
    {
        for(i=0;i<employee.length;i++)
        {
            if(employee[i].id==id)
            {
                console.log(employee[i].fname); 
            }
        }
    
    }
    getlname(id)
    {
        for(i=0;i<employee.length;i++)
        {
            if(id==employee[i].id)
            {
                console.log(employee[i].lname);
            }
        }
    
    }
    getname(id)
    {
        for(i=0;i<employee.length;i++)
        {
            if(employee[i].id==id)
            {
                
                console.log(employee[i].fname+" "+employee[i].lname);
    
            }
        }
    }
    getsal(id)
    {
        for(i=0;i<employee.length;i++)
        {
            if(employee[i].id==id)
            {
                console.log(employee[i].sal);
            }
        }
    
    }
    getannualsal(id)
    {
    
        for(i=0;i<employee.length;i++)
        {
            if(employee[i].id==id)
            {
                console.log((employee[i].sal)*12);
            }
        }
    }
    getraise(id)
    {
        for(i=0;i<employee.length;i++)
        {
            if(employee[i].id==id)
            {
                console.log(((employee[i].sal/100)*20));
            }
        }
    }
    
    
    }
    var emp= new employees();
    var x=123
    emp.getId(x);
    emp.getfname(x);
    emp.getlname(x);
    emp.getname(x);
    emp.getannualsal(x);
    emp.getsal(x);
    emp.getraise(x)
    console.log("------------------------------");
    var y=1234;
    emp.getId(y);
    emp.getfname(y);
    emp.getlname(y);
    emp.getname(y);
    emp.getannualsal(y);
    emp.getsal(y);
    emp.getraise(y)
    console.log("------------------------------");
    var z = 12345;
    emp.getId(z);
    emp.getfname(z);
    emp.getlname(z);
    emp.getname(z);
    emp.getannualsal(z);
    emp.getsal(z);
    emp.getraise(z)