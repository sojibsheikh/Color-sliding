var slider = document.querySelector('.slider');
            var left = document.querySelector('.fa-chevron-circle-left');
            var right = document.querySelector('.fa-chevron-circle-right');
            var circle = document.querySelectorAll('.fa-circle');
            var colors = ['lawngreen','red','blue','black','yellow','green'];
            console.log((circle));
            var count = 0;
            left.addEventListener('click',()=>{
                count--;
                if(count<0){
                    count=colors.length-1;
                    changeColour(count);   
                }
                else
                changeColour(count);    
            })
            
            function changeColour(count){
                circle[count].style.color = colors[count];
                slider.style.backgroundColor = colors[count];
            }
            right.addEventListener('click',()=>{
                count++;
                if(count>colors.length){
                    count=0;
                    changeColour(count);
                    
                }
                else
                changeColour(count);
                
            })