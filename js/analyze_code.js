var badcode = [`
class NEFC {
    static void main(String[] args) {
        
        List <Integer> a = new Arrays.asList(
            1, 2, 3, 4, 5, 6, 7
        );
        
        List <Integer> b = new ArrayList<Integer>();
        
        for(Integer i : a) {
            if(i % == 0) {
                b.add(i);
            }
        }
    }
}
`,
`
void not_env_friendly_code() {
    int b = 3;
    for (int i = 0; i < 10; i++)
        b += 2;
}
`,
`
def not_env_friendly_code():
    for i in range(100):
        print("2", end="")
    print()
`,

`
class NEFC {
    string not_env_friendly_code() {
        var name = "Sultana"
        + " Sultanova";
        return name;
    }
}
`

];


var goodcode = [`
class NEFC {
    static void main(String[] args) {

        List <Integer> a = new Arrays.asList(
            1, 2, 3, 4, 5, 6, 7
        );

        List <Integer> b = a.stream()
                                .filter(i -> i % 2 == 0)
                                .collect(Collectors.toList());

    }
}
`,
`
void not_env_friendly_code() {
    int b = 3;
    b += 2 * 10;
}
`,
`
def not_env_friendly_code():
    print("2" * 100)
`,
`
class NEFC {
    string not_env_friendly_code() {
        string  name = "Sultana" + 
        " Sultanova";
        return name;
    }
`
];

var suggestions = [
    "We can save 2 CPU clock cycles by using a Java stream API. It is more efficient than a for loop and cause less CO2 emissions",
    "This simple calculation can be done in one line of code. It will save a lot of CPU clock cycles and reduce CO2 emissions",
    "Use string multiplication instead of a for loop. It will save CPU clock cycles and reduce CO2 emissions",
    "Use explicit datatype instead of var. It will save CPU clock cycles and reduce CO2 emissions"
];

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})


function analyzeCode() {
    var editor = ace.edit("editor");
    code = editor.getValue();
    let toast = document.getElementById('toast');
    toast.querySelector(".toast-body").textContent="No optimization needed";

    for (var i = 0; i < badcode.length; i++) {
        if (code.replace(/\s/g, '') == badcode[i].replace(/\s/g, '')) {
            toast.querySelector(".toast-body").textContent=suggestions[i];
            if (i != 2) {
                editor.setValue(`${goodcode[i]}\n/*\n${code}\n*/`);
            } else {
                editor.setValue(`${goodcode[i]}\n"""\n${code}\n"""`);
            }
        }
    }
    var myToast = bootstrap.Toast.getInstance(toast);
    myToast.show()
}


