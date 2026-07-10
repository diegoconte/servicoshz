// ===================================================
// SERVIÇOS: Secretaria de Saúde
// ===================================================
bdServicos.push(
    {
        id: 1,
        titulo: "Farmácia Básica Municipal",
        secretaria: "Secretaria de Saúde",
        descricao: "Dispensação de medicamentos e dietas da relação municipal (REMUME), além do encaminhamento de solicitações de medicamentos e dietas fornecidos pelo Estado.",
        elegibilidade: "Qualquer cidadão residente no município de Horizontina, com cadastro atualizado na sua unidade de saúde de referência.",
        documentos: [
            "Receita médica (original)",
            "Cartão do Munícipe",
            "Documento de Identidade oficial com foto do responsável pela retirada"
        ],
        etapas: [
            { nome: "Apresentação", desc: "O cidadão apresenta a receita médica válida e os documentos obrigatórios no balcão de atendimento." },
            { nome: "Avaliação dos Itens", desc: "O servidor da farmácia avalia a prescrição médica para verificar a disponibilidade dos itens no estoque." },
            { nome: "Lançamento no Sistema", desc: "Registro da dispensação e dados de controle nos sistemas IPM Saúde ou AME Estado." },
            { nome: "Dispensação e Orientação", desc: "Entrega física do medicamento ou dieta ao paciente com as devidas orientações de uso." },
            { nome: "Assinatura do Recibo", desc: "O cidadão ou responsável assina o recibo comprovando a retirada." },
            { nome: "Medicamento Especial (se necessário)", desc: "Orientações sobre o agendamento e encaminhamento para itens de média e alta complexidade fora da lista municipal padrão." }
        ],
        canais: [
            { tipo: "Presencial", local: "Rua Arnoldo Schneider, 935 (Segunda a Sexta-feira, das 07:45 às 11:15 e das 13:30 às 17:00)" },
            { tipo: "Telefone", local: "55 3537 6173" },
            { tipo: "E-mail", local: "farmacia@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Variável (atendimento por ordem de chegada física, sem painel eletrônico de senhas)", 
            analise: "Imediato (no ato do atendimento presencial)", 
            total: "Imediato (entrega no momento do atendimento, sujeita a estoque)" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Este serviço é totalmente gratuito para o cidadão." 
        },
        resultado: "Medicamento e/ou dieta entregue presencialmente.",
        destaque: true
    }
);