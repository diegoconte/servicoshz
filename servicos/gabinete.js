// ===================================================
// SERVIÇOS: Secretaria do Gabinete do Prefeito
// ===================================================
bdServicos.push(
    {
        id: 2,
        titulo: "Controladoria e Controle Interno",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Planejar, coordenar e executar atividades de auditoria e fiscalização interna de conformidade legal, além de atender de forma direta as demandas, prazos e diligências de controle do Tribunal de Contas do Estado (TCE/RS).",
        elegibilidade: "Não se aplica (Serviço técnico-administrativo restrito de caráter estritamente interno).",
        documentos: [
            "Não se aplica (Instrução direta por atos oficiais e procedimentos internos)"
        ],
        etapas: [
            { nome: "Planejamento e Cronograma", desc: "Elaboração de cronogramas e escopos anuais de fiscalizações nos setores do Executivo." },
            { nome: "Execução de Auditorias", desc: "Análise sistemática da conformidade legal, financeira, contábil e operacional dos atos da administração." },
            { nome: "Relatório de Controle Interno", desc: "Geração de notas técnicas, pareceres orientadores e relatórios periódicos de conformidade." },
            { nome: "Atendimento ao TCE/RS", desc: "Compilação de dados municipais e envio sistemático de respostas às diligências e auditorias do Tribunal de Contas." }
        ],
        canais: [
            { tipo: "Presencial", local: "Gabinete do Prefeito - Departamento de Controle Interno (Rua Balduíno Schneider, 375)" },
            { tipo: "Telefone", local: "55 3537 7500" }
        ],
        prazos: { 
            espera: "Não se aplica (Atendimento de fluxos internos programados)", 
            analise: "Definido por prazos regimentais e prazos legais exigidos pelo TCE/RS", 
            total: "Variável (Dependendo da complexidade do objeto auditado)" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Não se aplica (Trata-se de atividade institucional sem taxas administrativas)." 
        },
        resultado: "Pareceres técnicos, relatórios periódicos de controle e respostas de conformidade instruídas.",
        destaque: false
    },
    {
        id: 13,
        titulo: "Videomonitoramento e Cercamento Eletrônico",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Disponibilização e análise de registros de imagens capturadas pelas câmeras de videomonitoramento e do cercamento eletrônico municipal, visando dar suporte a investigações de segurança de forma coordenada com as forças policiais.",
        elegibilidade: "Qualquer pessoa física ou jurídica que atenda as normas fixadas na Portaria SSP nº 016/2022.",
        documentos: [
            "O acesso as imagens será concedido mediante solicitação formal, contendo os dados necessários para a extração pontual das imagens, tais como: o endereço completo, data e horário inicial e final do fato: I - da autoridade judicial e do Ministério Público; II - dos encarregados de inquérito policial, do inquérito policial-militar, da sindicância ou procedimentos congêneres, em qualquer caso. III - dos setores de inteligência da polícia civil e militar.",
            ],
        etapas: [
            { nome: "Abertura de Protocolo", desc: "O cidadão inicia o protocolo municipal devidamente justificado com a documentação em anexo." },
            { nome: "Análise Legal", desc: "Verificação da conformidade com a Lei Geral de Proteção de Dados (LGPD) e critérios de autorização técnica." },
            { nome: "Emissão de Autorização", desc: "Se aprovado, o departamento emite termo de autorização formal contendo as especificações das gravações." },
            { nome: "Coleta e Entrega", desc: "O cidadão recebe a autorização oficial em papel para realizar a coleta física das imagens diretamente na Brigada Militar (necessário portar pendrive)." }
        ],
        canais: [
            { tipo: "Presencial", local: "Rua Balduíno Schneider, nº 375 (Gabinete do Prefeito)" }
        ],
        prazos: { 
            espera: "Até 2 horas úteis para o processamento de recebimento do protocolo inicial", 
            analise: "Até 5 dias úteis para deferimento ou indeferimento", 
            total: "Até 5 dias úteis para a resposta definitiva e liberação de guia" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço público de segurança oferecido de forma gratuita." 
        },
        resultado: "Guia oficial autorizadora para salvamento de trechos de imagem na sede operacional da Brigada Militar.",
        destaque: false
    },
    {
        id: 14,
        titulo: "Demandas da Subprefeitura de Cascata",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Canal presencial direto de atendimento, recebimento e triagem de solicitações e demandas de melhoria de infraestrutura e serviços públicos para os moradores da região de Cascata.",
        elegibilidade: "Qualquer munícipe maior de idade residente no município de Horizontina.",
        documentos: [
            "Documentos de identificação e informações que variam de acordo com o teor da solicitação"
        ],
        etapas: [
            { nome: "Registro presencial", desc: "O morador relata sua demanda ou apresenta protocolo no guichê de atendimento." },
            { nome: "Triagem e Encaminhamento", desc: "O Subprefeito analisa a viabilidade e tramita a demanda para a secretaria operacional responsável (Obras, Agricultura, etc.)." },
            { nome: "Acompanhamento Técnico", desc: "Acompanhamento da execução de melhorias no local apontado." },
            { nome: "Conclusão e Retorno", desc: "Finalização do atendimento com comunicação direta ao cidadão por telefone ou pessoalmente." }
        ],
        canais: [
            { tipo: "Presencial", local: "Sede da Subprefeitura de Cascata (Segunda a Sexta, das 07:45 às 12:00 e das 13:30 às 17:15)" },
            { tipo: "Telefone", local: "55 99626 6369 (Ligação e WhatsApp)" },
            { tipo: "E-mail", local: "daridreifke@gmail.com" },
            { tipo: "Online", local: "Portal Atende.NET", link: "https://horizontina.atende.net" }
        ],
        prazos: { 
            espera: "Atendimento imediato por ordem de chegada no balcão presencial", 
            analise: "Variável conforme o cronograma e prioridades de execução das secretarias executoras", 
            total: "Concluído de forma integrada conforme o tipo de serviço solicitado" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Recepção e triagem de demandas totalmente gratuita." 
        },
        resultado: "Processo encaminhado com acompanhamento direto até a entrega final pela secretaria operacional.",
        destaque: false
    },
    {
        id: 15,
        titulo: "Atendimento PROCON (Defesa do Consumidor)",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Receber reclamações de consumidores, mediar conflitos na relação de consumo e orientar cidadãos e fornecedores de acordo com as normas de proteção e defesa do consumidor.",
        elegibilidade: "Qualquer consumidor (pessoa física ou jurídica) que adquira produto ou serviço como destinatário final no município de Horizontina, no âmbito de uma relação de consumo (comprovada por notas fiscais, contratos, ordens de serviço, faturas ou extratos). Nota: Problemas de vizinhança, relações de locação residencial pura, questões trabalhistas ou serviços prestados por profissionais liberais sem característica empresarial não entram no escopo.",
        documentos: [
            "Documentos pessoais oficiais com foto (RG, CPF ou CNH) e comprovante de residência atualizado",
            "Comprovantes da relação de consumo (Nota Fiscal, Contrato, Fatura, Recibo, Extrato Bancário ou Ordem de Serviço)",
            "CIP - Carta de Informações Preliminares (caso possua registros anteriores de tratativa frustrada ou protocolos na empresa)",
            "Evidências do problema alegado (prints, e-mails, protocolos de atendimento, fotos do produto com defeito)"
        ],
        etapas: [
            { nome: "Abertura do Atendimento", desc: "O consumidor formaliza a reclamação presencialmente ou por canais digitais, apresentando as provas iniciais." },
            { nome: "Emissão de Notificação (CIP)", desc: "O PROCON emite a Carta de Informações Preliminares (CIP) e notifica formalmente a empresa fornecedora sobre o problema apontado." },
            { nome: "Tentativa de Conciliação", desc: "Contatos diretos ou audiências de conciliação intermediadas para alinhar um acordo amigável e legítimo que satisfaça as partes dentro do CDC." },
            { nome: "Retorno da Solução", desc: "A empresa envia a manifestação oficial. O consumidor analisa o posicionamento com a equipe do Procon." },
            { nome: "Encerramento e Arquivamento", desc: "O caso é arquivado se resolvido. Caso as negociações restem infrutíferas, o consumidor é formalmente orientado e encaminhado para o JEC (Juizado Especial Cível) ou Defensoria Pública." }
        ],
        canais: [
            { tipo: "Presencial", local: "PROCON Municipal - Rua Uruguai, nº 1119 (Segunda a Sexta, das 07:45 às 12:00 e das 13:30 às 17:15)" },
            { tipo: "Telefone", local: "55 3537 7504 / 55 3537 7590" },
            { tipo: "E-mail", local: "procon@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Acolhimento imediato (ou de acordo com a fila de espera presencial)", 
            analise: "Entre 5 a 10 dias úteis para analisar respostas ou convocar conciliação", 
            total: "Até 20 dias corridos para solução global e resposta final ao reclamante" 
        },
        custo: { 
            gratuito: true, 
            descricao: "O atendimento e intermediação do PROCON são serviços totalmente gratuitos." 
        },
        resultado: "Ficha de atendimento formalizada, acordo homologado ou encaminhamento jurídico ao JEC.",
        destaque: false
    },
    {
        id: 16,
        titulo: "Avaliação Rápida de Danos e Resposta a Desastres Naturais",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Serviço voltado à avaliação técnica imediata de danos e prejuízos materiais causados por temporais, vendavais, chuva de granizo, enchentes e desastres naturais adversos. Atua diretamente na resposta humanitária e na coordenação de auxílios à integridade física da população.",
        elegibilidade: "Qualquer cidadão residente no município de Horizontina atingido por eventos climáticos severos e desastres naturais.",
        documentos: [
            "Não se aplica (O atendimento é gerado prioritariamente por vistoria e inspeção imediata no local afetado)"
        ],
        etapas: [
            { nome: "Chamado Emergencial", desc: "O cidadão registra a situação emergencial por telefone (plantão), e-mail ou pessoalmente na sede administrativa." },
            { nome: "Vistoria Técnica In Loco", desc: "A equipe da Defesa Civil realiza o levantamento físico dos danos, coleta dados estruturais e fotografa o sinistro." },
            { nome: "Ações de Tratativas e Socorro", desc: "Definição de apoio imediato (como entrega de lonas) ou acionamento de suporte técnico das Secretarias de Infraestrutura e Assistência Social." },
            { nome: "Encerramento da Ocorrência", desc: "Lavratura de relatório de ocorrência oficial de vistoria e encerramento do protocolo emergencial." }
        ],
        canais: [
            { tipo: "Presencial", local: "Departamento de Defesa Civil - Av. Helmuto Simm, nº 100, Sala 05 (Segunda a Sexta, das 08:00 às 17:00)" },
            { tipo: "Telefone", local: "55 99938 4238 (Plantão Telefônico de Urgência 24 Horas)" },
            { tipo: "E-mail", local: "defesacivil@horizontina.rs.gov.br" },
            { tipo: "Online", local: "Portal Geral de Autoatendimento Atende.NET", link: "https://horizontina.atende.net" }
        ],
        prazos: { 
            espera: "Imediato (Atendimento de emergência prioritário)", 
            analise: "Imediato a partir da triagem de severidade", 
            total: "Variável de acordo com a complexidade e abrangência climática do evento adverso" 
        },
        custo: { 
            gratuito: true, 
            descricao: "O socorro emergencial e vistorias da Defesa Civil são totalmente gratuitos." 
        },
        resultado: "Lonas de emergência fornecidas, isolamento de áreas perigosas concluído e laudo de vistoria instruído.",
        destaque: true
    },
    {
        id: 17,
        titulo: "Busca e Localização de Pessoas Desaparecidas em Áreas Rurais",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Ações emergenciais conjuntas de busca, rastreamento e auxílio ao resgate de pessoas desaparecidas em áreas de mata, rurais ou localidades de difícil acesso geográfico do município, visando salvaguardar vidas de forma integrada.",
        elegibilidade: "Qualquer pessoa cujo desaparecimento tenha ocorrido em limites territoriais do município de Horizontina.",
        documentos: [
            "Não se aplica (Operação emergencial de força de segurança pública e salvamento)"
        ],
        etapas: [
            { nome: "Acolhimento da Manifestação", desc: "Recepção dos dados e detalhes do desaparecimento, características da vítima e última localização conhecida." },
            { nome: "Lançamento no System", desc: "Abertura imediata do relatório de sinistro no aplicativo estadual SEGIR-RS." },
            { nome: "Articulação Institucional", desc: "Mobilização em rede com o Corpo de Bombeiros Militar, Brigada Militar, Polícia Civil e voluntários treinados." },
            { nome: "Execução das Buscas", desc: "Trabalhos de varredura física e mapeamento geográfico em campo." },
            { nome: "Resgate e Encerramento", desc: "Localização da pessoa, prestação de primeiros socorros de emergência ou encaminhamento hospitalar se necessário, com fechamento de registro." }
        ],
        canais: [
            { tipo: "Presencial", local: "Departamento de Defesa Civil - Av. Helmuto Simm, nº 100, Sala 05 (Segunda a Sexta, das 08:00 às 17:00)" },
            { tipo: "Telefone", local: "55 99938 4238 (Plantão Telefônico de Urgência 24 Horas)" },
            { tipo: "E-mail", local: "defesacivil@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Imediato (Atendimento classificado como emergência máxima)", 
            analise: "Imediato", 
            total: "Operação ininterrupta até a conclusão ou localização da vítima" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Buscas e socorros públicos promovidos pela Defesa Civil são totalmente gratuitos." 
        },
        resultado: "Pessoa localizada, primeiros socorros prestados e relatório fechado.",
        destaque: false
    },
    {
        id: 18,
        titulo: "Acompanhamento de Queimadas e Incêndios Florestais",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Ações coordenadas de monitoramento preventivo, apoio ao combate e controle de queimadas e focos de incêndio florestal em lavouras e vegetações nativas, cooperando diretamente com as forças de combate de incêndios do Corpo de Bombeiros.",
        elegibilidade: "Proprietários rurais ou qualquer cidadão do município que identifique situação de queimadas descontroladas ou focos ativos de incêndio.",
        documentos: [
            "Laudo ou autorização ambiental expedida pelo Meio Ambiente (caso seja queima controlada agendada)"
        ],
        etapas: [
            { nome: "Alerta de Incêndio", desc: "O cidadão avisa por telefone a Defesa Civil ou o plantão sobre focos ativos na vegetação." },
            { nome: "Registro de Sinistro", desc: "Abertura imediata do relatório de monitoramento no aplicativo SEGIR do Rio Grande do Sul." },
            { nome: "Mobilização Tática", desc: "Suporte e articulação operacional com o Corpo de Bombeiros Militar de Horizontina." },
            { nome: "Monitoramento e Rescaldo", desc: "Acompanhamento da propagação das chamas até a total extinção e lavratura de dados ambientais de área atingida." }
        ],
        canais: [
            { tipo: "Presencial", local: "Departamento de Defesa Civil - Av. Helmuto Simm, nº 100, Sala 05 (Segunda a Sexta, das 08:00 às 17:00)" },
            { tipo: "Telefone", local: "55 99938 4238 (Plantão Telefônico de Urgência 24 Horas)" },
            { tipo: "E-mail", local: "defesacivil@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Imediato", 
            analise: "Imediato a partir da severidade de perigo ambiental ou patrimonial", 
            total: "Variável até a debelação do incêndio e rescaldo ambiental" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Ações de monitoramento e apoio ao combate de chamas da Defesa Civil são gratuitas." 
        },
        resultado: "Queimada controlada, suporte de combate concluído e relatório lavrado.",
        destaque: false
    },
    {
        id: 19,
        titulo: "Monitoramento Preventivo de Áreas de Risco",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Inspeções preventivas constantes de áreas suscetíveis a alagamentos, deslizamentos, quedas ou perigos estruturais (pontes rurais, encostas, margens de rios e barragens) visando mitigar ameaças materiais e resguardar a comunidade.",
        elegibilidade: "Munícipes de Horizontina que residam ou tenham bens em áreas vulneráveis a intempéries e desastres geológicos.",
        documentos: [
            "Não se aplica"
        ],
        etapas: [
            { nome: "Identificação da Suspeita", desc: "Recepção de chamado do cidadão reportando rachaduras, movimentação de encosta ou aumento crítico no nível de rios/pontes." },
            { nome: "Vistoria e Levantamento", desc: "Equipe técnica da Defesa Civil vai ao local para colher registros visuais, níveis de água e documentar a integridade estrutural do local." },
            { nome: "Tratativas de Segurança", desc: "A equipe avalia a necessidade de bloqueio de vias, remoção de famílias e contata a Secretaria de Infraestrutura ou Órgãos do Estado se houver iminência de colapso." },
            { nome: "Registro em Plataforma Nacional", desc: "Fechamento do protocolo e inclusão dos dados de monitoramento técnico nos sistemas federais S2ID e SEGIRD." }
        ],
        canais: [
            { tipo: "Presencial", local: "Departamento de Defesa Civil - Av. Helmuto Simm, nº 100, Sala 05 (Segunda a Sexta, das 08:00 às 17:00)" },
            { tipo: "Telefone", local: "55 99938 4238 (Plantão Telefônico de Urgência 24 Horas)" },
            { tipo: "E-mail", local: "defesacivil@horizontina.rs.gov.br" },
            { tipo: "Online", local: "Portal Geral de Autoatendimento Atende.NET", link: "https://horizontina.atende.net" }
        ],
        prazos: { 
            espera: "Imediato ou agendado conforme risco detectado", 
            analise: "Imediato para checagens preliminares de urgência", 
            total: "Atividade de monitoramento técnico contínuo" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Vistorias, mapeamentos e diagnósticos de risco são oferecidos de forma gratuita." 
        },
        resultado: "Pontos monitorados, relatórios preventivos emitidos e área sinalizada contra sinistros.",
        destaque: false
    },
    {
        id: 28,
        titulo: "Registros de Ouvidoria (Reclamações, Denúncias, Sugestões e Elogios)",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Processamento e acolhimento das manifestações dos cidadãos de Horizontina, como solicitações, reclamações, denúncias, sugestões ou elogios. Atua na mediação de conflitos, promoção de melhorias de gestão interna e na garantia dos direitos dos usuários.",
        elegibilidade: "Qualquer cidadão que utilize serviços públicos municipais ou que sinta que seus direitos foram de alguma forma violados.",
        documentos: [
            "Não é exigido nenhum tipo de identificação para registrar denúncias ou reclamações (nosso processo é desburocratizado e as manifestações podem ser feitas de forma totalmente anônima, garantindo-se o sigilo absoluto do relato)."
        ],
        etapas: [
            { nome: "Registro da Manifestação", desc: "O cidadão registra o relato de forma presencial, por telefone, e-mail ou no Portal de Autoatendimento Atende.net (aba Ouvidoria)." },
            { nome: "Abertura do Processo", desc: "A Ouvidoria acolhe a demanda, realiza o registro detalhado dos fatos e gera um número de protocolo definitivo." },
            { nome: "Investigação e Tramitação", desc: "O processo é tramitado de forma sigilosa para os órgãos técnicos ou secretarias competentes para apuração dos fatos." },
            { nome: "Tratativas e Solução", desc: "O setor responsável avalia o ocorrido e desenvolve soluções adequadas em até 20 dias, retornando a solução validada ao Ouvidor." },
            { nome: "Encerramento e Resposta", desc: "A Ouvidoria consolida o parecer definitivo e dá retorno oficial ao munícipe, arquivando o processo com segurança." }
        ],
        canais: [
            { tipo: "Presencial", local: "Ouvidoria Municipal - Rua Uruguai, 1119 (Segunda a Sexta, das 07:45 às 12:00 e das 13:30 às 17:15)" },
            { tipo: "Telefone", local: "55 3537 3027 / 55 3537 7590" },
            { tipo: "E-mail", local: "ouvidoria@horizontina.rs.gov.br" },
            { tipo: "Online", local: "Portal Atende.net - Aba Ouvidoria", link: "https://horizontina.atende.net" }
        ],
        prazos: { 
            espera: "Imediato (geração do número de protocolo e identificação do processo no ato da manifestação)", 
            analise: "Até 20 dias corridos para análise e resposta definitiva (prorrogável nos termos da Lei nº 13.460/2017)", 
            total: "Até 20 dias corridos para resposta conclusiva" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Este serviço de cidadania é totalmente gratuito." 
        },
        resultado: "Parecer final fundamentado sobre a apuração dos fatos e disponibilização de soluções técnicas e providências adotadas.",
        destaque: false
    }
);