...Js.....

1.setTimeout()
2.setInterval()
3.Date() 
4.new keyword


1.setTimeout : setTimeout(function,time)

    =>it will excute function only one time after specified time is ended.
    =>it is asynchronously done by js engine because of js engine never stop.so js engine excute remainig things untill time is ended.

        CALLSTAK <= EVENTLOOP <= cbQUEUE <= WEBAPI <TIMER>

        whenever setTimeout is excuted then EVENT LOOP CONCEPT comes to picture

2.setInterval : setInterval(function,time)

                => it will excute function each interval of time

3.Date() => it is a js class by using this we can get DATE and TIME

4.new    => does 3 Steps in background 
                1.creates the object of function 
                2.bind theproperties initilized with this keyword in function
                3.if constructor function or function not include return then it will include return after end keywors assigned with this.




....CSS....

1.Gradients
2.reflections
4.shadows => box ,text



1.Gradients: These are used to render colors with smoth transitions.
    => gradients are two types 
            1.linear gradient => from specified directioon transitions start
            2.radial gradient => from center of elements transitions start

            linear-gradient(directioon,c1,c2,..,cN)
            radial-gradient(directioon,c1,c2,..,cN)

    Color = it uses Text Color
    Background-color = it uses the color of the background
    Background = it  gives you the posibillity to set color, image , etc...

    =>One big difference is, that a 'background-color' does not overwrite an image or a gradient that has been set with this 'Background':


2.reflections : used to reflecting the images in all sides

                syn :   -webkit-box-reflect: position offset(distance from original)
                 
                
                
                EX :  -webkit-box-reflect: bottom 2px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));

3.shadows : gives the shadow of box or texture


            syn : box-shadow vertical, horizontal, color

            ex: box-shadow  0,0,red