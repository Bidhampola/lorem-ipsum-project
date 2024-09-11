//get dom elements
const text = [
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper lobortis justo dis nisi ridiculus. Nostra enim condimentum in risus luctus suspendisse nullam at aenean. Vitae praesent malesuada praesent sit mattis ullamcorper sed. Magnis ut morbi fames aliquet posuere lacus. Semper quisque taciti amet dui et himenaeos suspendisse. Scelerisque malesuada praesent vitae nulla viverra tortor. Purus fusce senectus et pellentesque praesent laoreet leo. Cubilia sagittis bibendum mus dapibus vulputate vel ipsum mi.",
    "Convallis condimentum scelerisque aliquam dui rhoncus mattis dolor commodo. Laoreet potenti aliquet pellentesque sollicitudin ligula tristique fermentum. Lacus aliquam ultrices volutpat senectus nam viverra enim. Cras adipiscing efficitur quis justo, quam dictum velit sed. Ultrices curae erat fusce imperdiet semper taciti. Iaculis dis id risus elementum non euismod suspendisse. Faucibus etiam et accumsan ex dis enim efficitur nulla. Aullamcorper venenatis accumsan blandit; maecenas ex risus nostra.",
    "Facilisis vulputate praesent tortor tortor dui massa. Morbi commodo potenti cubilia auctor ipsum platea pharetra? Tortor convallis diam ultrices magna interdum litora sed. Vehicula maximus vehicula volutpat dignissim luctus efficitur. Nisi lacinia elit nisl leo dolor per. Condimentum nunc turpis finibus vestibulum donec nullam. Cubilia arcu curae faucibus hac dolor.",
    "Nibh hac magna risus condimentum montes luctus imperdiet. Id mattis sociosqu viverra eget massa. Bibendum pellentesque himenaeos et vitae metus turpis. Facilisi vulputate conubia elementum ullamcorper accumsan convallis. Pellentesque fringilla vestibulum mollis facilisis efficitur eget commodo pretium. Eleifend lobortis ullamcorper turpis commodo eu taciti venenatis consequat. Morbi condimentum scelerisque commodo nibh at. Class libero semper parturient elementum curabitur turpis efficitur cras dapibus.",
    "Montes eu cubilia odio dapibus senectus nam aliquam. Odio consequat posuere taciti; magna curae curae cras maecenas. Hac platea facilisis duis facilisis tempus maecenas at sed. Consequat enim ridiculus dolor pretium duis; tortor nibh fusce. Purus aenean nisi consequat non elementum erat. Feugiat in ultricies rhoncus viverra molestie risus urna parturient.",
    "Purus commodo fames malesuada phasellus natoque libero dignissim torquent. Lobortis est consectetur est, pretium lobortis quis. Elementum volutpat odio habitant sem non non mollis. Mi nisi euismod, maximus pulvinar inceptos blandit lobortis. Lobortis vivamus porta molestie per imperdiet risus vehicula in. Fames ligula eleifend ultrices lectus posuere ex. Odio et maecenas mollis volutpat lacinia. Viverra molestie lacus faucibus amet rhoncus aliquam pharetra leo rutrum. Nisl neque fringilla vehicula, rutrum ex lacus. Vel varius efficitur nunc non ad tempor.",
    "Himenaeos hendrerit augue vestibulum aenean cursus sodales. Egestas vel aenean est, dolor ipsum tincidunt. Leo dis convallis bibendum porta ullamcorper? Netus class est consequat ac bibendum tortor. Est sollicitudin augue praesent, senectus dictum sagittis imperdiet curae. Consectetur placerat risus est nullam fermentum nunc blandit id cubilia. Dignissim faucibus mus taciti tortor tortor.",
    "Habitasse proin molestie laoreet integer scelerisque tempor. Vestibulum netus curabitur hendrerit nostra maecenas amet vehicula mattis. Varius curae habitasse libero; ultrices scelerisque blandit. Dis dolor aliquet cursus ipsum luctus porttitor habitant faucibus. Varius vehicula mollis suscipit turpis suspendisse tellus. Sem scelerisque inceptos pellentesque; turpis vel eget parturient et.",
    "Ultrices primis pulvinar nisl nullam aenean adipiscing commodo ex? Adipiscing suscipit ligula a nunc dis odio. Sollicitudin non nisi eget hac sit natoque. Magnis magnis auctor parturient tempus enim commodo sem gravida odio. Pellentesque curabitur hendrerit ex conubia lacus suscipit, nisl nam. Tortor blandit interdum tristique viverra finibus non turpis accumsan. Congue suscipit mi libero cursus hac."
]

const btn = document.getElementById('btn')
const input = document.getElementById('input-text')
const form = document.getElementById('form')
const paraDiv = document.getElementById('para-div')

form.addEventListener("submit",function(e){
    e.preventDefault();
    let value = parseInt(input.value)
    let v = (value === NaN) ? 'Not a value' : 'empty'
    //check for nullness
    if(value == NaN ){
        alert('The field should not be empty')
    }
    else{
        //check if val is empty, if its 0 and less or greater than 9
        if(value === '' || value <= 0 || value >9){
            //return default paras to the dynamic dom
            let max = text.length
            let rand = Math.floor(Math.random() * max);
            // console.log(rand)
            paraDiv.innerHTML = `<p>${text[rand]}</p>`


        }
        else{
            //return dynamice paras to the dynamic dom

            // slice basing on user entered value 
            textData = text.slice(0,value);
            // console.log(textData),ind

            // textData.map((txt,ind)=>{
            //     console.log(text[ind])
            //     paraDiv.innerHTML += `<p>${txt[0]}</p>`
            // })

            let tempText
            tempText = textData.map((item) => {
                return `<p>${item}</p>`
            }).join("")

            paraDiv.innerHTML = tempText;

        }
    }
   
})
