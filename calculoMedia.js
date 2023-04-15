var nota1 = 0, nota2 = 0, nota3 = 0, faltas = 0;
var media = 0, menor = 0, qualNota = "", rec = 0;

nota1 = parseFloat(prompt("Nota 1: "));
nota2 = parseFloat(prompt("Nota 2: "));
nota3 = parseFloat(prompt("Nota 3: "));
faltas = parseFloat(prompt("Quantidade de faltas: "));

media = (nota1 + nota2 + nota3) / 3;

if(nota1 <= nota2 && nota1 <= nota3)
{
	menor = nota1;
    qualNota = "1º nota";
}
else
{
	if(nota2 <= nota1 && nota2 <= nota3)
	{
		menor = nota2;
        qualNota = "2º nota";
	}
    else
    {
    	menor = nota3;
        qualNota = "3º nota";
    }
}
alert("Média = " + media);
if( faltas < (0.25 * 90) && media >= 3)
{
	if( media >= 7)
	{
	    alert("Aprovado por Média");
	}
    else
    {
    	if( media < 7 && media >= 5)
        {
        	alert("Aprovado por Nota");
        }
        else
        {
        	if(media < 5 && media >= 3)
            {
            	faltando = (5 - ( media - (menor/3) ) ) * 3;  
            	alert("Aluno em recuperação, o aluno precisa tirar " + faltando + " para substituir a " + qualNota);
                rec = parseFloat(prompt("Nota da recuperação: "));
				media = (rec/3) + ( media - (menor/3) );
                if(media >= 5)
                {
                	alert("Aluno aprovado com média " + media);
                }
                else
                {
                	alert("Aluno reprovado");
                }
            }
        }
	}
}
else
{
	alert("Aluno reprovado");
}
