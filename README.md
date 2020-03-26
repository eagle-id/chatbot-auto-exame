# Chatbot-auto-exame
Chatbot para auto-exame contra o COVID-19

# Requisitos

### Dados Pessoais
Em um primeiro momento, o usuário deverá ser capaz de preencher os seguintes dados:
* Nome Completo
* Data de Nascimento
* Telefone
### Sintomas
A solução deverá conter uma lista com os sintomas comuns ao corona vírus e doenças similares (gripe, rinite, pneumonia, etc..), para que o usuário possa selecionar quais sintomas está sentindo no momento. Esta funcionalidade deverá:

1. Permitir que o usuário selecione quais sintomas está sentindo no momento

2. Possibilitar que o usuário preencha informações relevantes que o identifiquem como alguém do **Grupo de Risco** como: 

* Portadores de insuficiência renal crônica
* Portadores de doença respiratória crônica (ex: Asma, Bronquite)
* Portadores de doenças cardiovasculares (ex: Arritmia Cardíaca)
* Hipertensos
* Diabéticos
* Paciente Oncológicos (está se tratando ou recuperando de tratamentos contra o câncer)
* Gestantes

_**Obs:** Idosos também fazem parte do Grupo de Risco, porém esse dado deverá ser coletado no preenchimento da data de nascimento em [**Dados Pessoais**](https://github.com/eagle-id/hackathon-covid-19/wiki/_new#dados-pessoais)_

3. Possibilitar que o usuário possa responder ou escolher opções onde seja possível identificar se o mesmo teve algum **Contato de Risco**. _Ex: 
* Houve contato com pessoas que foram infectadas com corona vírus **nos últimos 14 dias.** 
* Viagens para outros países e/ou regiões do Brasil onde há o surto de COVID-19 (e.g. **Itália, China, São Paulo, Porto Alegre, etc..**).
* Houve contato com pessas que estiveram em locais com o surto de COVID-19.
* Participação recente em eventos com grande quantidade de pessoas (ex: Shoppings, estádios, festas)
* Houve deslocamento até locais com mais de 10 pessoas

**Obs:** Os textos são apenas exemplos, caso a equipe sinta necessidade os mesmos podem ser alterados para que facilitem a usabilidade da aplicação. 

4. Ser capaz de diferenciar sintomas graves de sintomas considerados leves. Ex:
* **Sintomas graves:** Insuficiência respiratória, febre alta persistente (acima de 39° por 3 dias seguidos ou mais);
* **Sintomas leves:** Coriza, dor de cabeça

**OBS:** De acordo com a Organização Mundial de Saúde, os sintomas específicos variam, porém o quadro geral de sintomas seria este: 

```Os sintomas mais comuns do COVID-19 são febre, cansaço e tosse seca. Alguns pacientes podem ter dores, congestão nasal, corrimento nasal, dor de garganta ou diarréia. Esses sintomas geralmente são leves e começam gradualmente. Algumas pessoas são infectadas, mas não apresentam sintomas e não se sentem mal. A maioria das pessoas (cerca de 80%) se recupera da doença sem precisar de tratamento especial. Cerca de 1 em cada 6 pessoas que recebe COVID-19 fica gravemente doente e desenvolve dificuldade em respirar. As pessoas idosas e as que têm problemas médicos subjacentes, como pressão alta, problemas cardíacos ou diabetes, têm maior probabilidade de desenvolver doenças graves. Pessoas com febre, tosse e dificuldade em respirar devem procurar atendimento médico.```

Link para maiores informações: [Q&A Sobre Corona Vírus - OMS (em inglês)](https://www.who.int/news-room/q-a-detail/q-a-coronaviruses)

5. Salvar os dados capturados, enviando-os para uma serviço externo.

6. Referente aos resultados calculados das recomendações de direcionamentos ao usuário, permitir que estes resultados sejam configuráveis.

---

# Como realizar

* Para iniciar, clone deste repositório
* Para organização dos sprints entre os membros da equipe, basta ir no link referente ao projeto [aqui](https://github.com/eagle-id/chatbot-auto-exame/projects/1) 

 ---
 
# Estrutura para Árvore de Decisão
 
## Boas vindas ao Chat
     (Texto introdutorio)
### Botão de opções
* QUERO AJUDA PROFISSIONAL
* QUERO INFORMACAO
* QUERO SER PROFISSIONAL VOLUNTARIO
* QUERO DOAR PARA AJUDAR PESSOAS CARENTES
* QUERO ME QUALIFICAR 
* QUERO DICAS DE COMO TRABALHAR DE CASA (HOME OFFICE)
* QUERO E BUSCO ORIENTACAO ESPIRITUAL

---

## Quero ajuda profissional
     (Texto introdutorio)
### Botão de opções:
* PSICOLOGO
* ADVOGADO
* NUTRICIONISTA
* ENFERMEIRO
* MEDICO
* EDUCADOR FISICO
* ASSISTENTE SOCIAL
* PEDAGOGO
* DENTISTA
* VETERINARIO
* ADMINISTRADOR DE EMPRESA
* CONTADOR
* FARMACEUTICO
* BIOMEDICO
* ORIENTADOR ESPIRITUAL

---

## Quero informação
(Texto introdutório)
### Botão de opções:
* RECOMENDACOES DE PREVENCAO AO COVID 19
* DIETA ALIMENTAR
* MEDICACOES
* EXERCICIOS FISICOS
* PREVENCAO PARA IDOSOS

---

## Quero me qualificar
(Texto introdutório)
* LINKS DE SITES DE OFERTA DE CURSOS FREE EAD
* ...
* LINK PARA  SITE UNISINOS

---

## Quero dicas de como trabalhar de casa
(Texto introdutório)
* LINKS DE TEXTOS
* ...
* LINKS DE SITES
* .... 

---

## Quero e busco orientação espiritual
(Texto introdutório)
### BOTOES DE OPCOES:
* ALGUEM ORAR COMIGO
* ALGUEM PARA CONVERSAR

---

## Quero realizar uma doação
(Texto introdutório)
* Dados de agência e conta ASAV
