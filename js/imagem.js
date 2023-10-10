imagem = '';
limite = 0;
escreva = '';
function imagem1()
{
    imagem = '<img src="cachorro_2.jpg" alt="">'
    document.getElementById('caixa').innerHTML = imagem;
}

function imagem2()
{
    imagem = '<img src="cachorro_1.jpg" alt="">'
    document.getElementById('caixa').innerHTML = imagem;
}

function data()
{
    if (limite<1)
    {
        var data = new Date()
        var ano = data.getFullYear() 
        var dia = data.getDay()
        var mes = data.getMonth()

        var mes_nome = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
        var dia_nome = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabádo']

        mes = mes_nome[mes]
        dia = dia_nome[dia]
        escreva += dia+"<br>"+ ano+"<br>"+mes
        
        document.getElementById('data').innerHTML = escreva;
       
        limite ++;
    }
}