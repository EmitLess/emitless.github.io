var badcode = `
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
`;


var goodcode = `
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
`;

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})


function analyzeCode() {
    var editor = ace.edit("editor");
    code = editor.getValue();
    let toast = document.getElementById('toast');
    toast.querySelector(".toast-body").textContent="No optimization needed";

    if (code.replace(/\s/g, '') == badcode.replace(/\s/g, '')) {
        toast.querySelector(".toast-body").textContent="20gr of CO2 were saved";
        editor.setValue(goodcode); 
    }
    var myToast = bootstrap.Toast.getInstance(toast);
    myToast.show()
}


