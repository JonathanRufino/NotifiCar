import React, { Component } from 'react';
import { ScrollView, View, Text, Linking } from 'react-native';

import styles from './styles';

class PrivacyPolicy extends Component {
    render() {
        return (
            <ScrollView style={styles.screen}>
                <View>
                    <Text style={styles.h1}>
                        Política de Privacidade - NotifiCar
                    </Text>

                    <Text style={styles.h2}>
                        1. Proprietário e Controlador de Dados
                    </Text>

                    <Text style={styles.h2}>
                        1.1 Tipos de Dados Coletados
                    </Text>

                    <Text style={styles.h3}>
                        1.1.1 Uso de Dados e outros dados coletados
                    </Text>

                    <Text style={styles.p}>
                        Detalhes completos sobre cada tipo de Dados Pessoais coletados são fornecidos nas seções dedicadas desta política de privacidade ou por textos explicativos específicos exibidos antes da coleta de Dados.
                    </Text>
                    <Text style={styles.p}>
                        Os Dados Pessoais poderão ser fornecidos livremente pelo Usuário, ou, no caso dos Dados de Utilização, coletados automaticamente ao se utilizar este Aplicativo.
                    </Text>
                    <Text style={styles.p}>
                        Todos os Dados solicitados por este Aplicativo são obrigatórios e a falta de fornecimento destes Dados poderá impossibilitar este Aplicativo de fornecer os seus serviços. Nos casos em que este Aplicativo afirmar especificamente que alguns Dados não forem obrigatórios, os Usuários ficam livres para deixarem de comunicar estes Dados sem nenhuma consequência para a disponibilidade ou o funcionamento deste serviço (este Aplicativo).
                    </Text>
                    <Text style={styles.p}>
                        Os Usuários que tiverem dúvidas a respeito de quais Dados Pessoais são obrigatórios estão convidados a entrar em contato com o Proprietário.
                    </Text>
                    <Text style={styles.p}>
                        Quaisquer usos de cookies – ou de outras ferramentas de rastreamento – por este Aplicativo serão para a finalidade de fornecer os serviços solicitados pelo Usuário, além das demais finalidades descritas no presente documento e na Política de Cookies, se estiver disponível.
                    </Text>
                    <Text style={styles.p}>
                        Os Usuários ficam responsáveis por quaisquer Dados Pessoais de terceiros que forem obtidos, publicados ou compartilhados através deste serviço (este Aplicativo) e confirmam que possuem a autorização dos terceiros para fornecerem os Dados para o Proprietário.
                    </Text>
                </View>

                <View>
                    <Text style={styles.h2}>
                        1.2 Modo e local de processamento dos Dados
                    </Text>

                    <Text style={styles.h3}>
                        1.2.1 Método de processamento
                    </Text>

                    <Text style={styles.p}>
                        O Controlador de Dados processa os dados de Usuários de forma adequada e tomará as medidas de segurança adequadas para impedir o acesso não autorizado, divulgação, alteração ou destruição não autorizada dos Dados.
                    </Text>

                    <Text style={styles.p}>
                        O processamento de dados é realizado utilizando computadores e /ou ferramentas de TI habilitadas, seguindo procedimentos organizacionais e meios estritamente relacionados com os fins indicados. Além do Controlador de Dados, em alguns casos, os Dados podem ser acessados por certos tipos de pessoas envolvidas com a operação do site (administração, vendas, marketing, administração legal do sistema) ou pessoas externas (como fornecedores terceirizados de serviços técnicos, carteiros, provedores de hospedagem, empresas de TI, agências de comunicação) nomeadas, quando necessário, como Processadores de Dados por parte do Proprietário. A lista atualizada destas partes pode ser solicitada a partir do Controlador de Dados a qualquer momento.
                    </Text>

                    <Text style={styles.h3}>
                        1.2.2 Lugar
                    </Text>

                    <Text style={styles.p}>
                        Os dados são processados nas sedes de operação do Controlador de Dados, e em quaisquer outros lugares onde as partes envolvidas com o processamento estejam localizadas. Para mais informações, por favor entre em contato com o Controlador de Dados.
                    </Text>

                    <Text style={styles.h3}>
                        1.2.3 Período de conservação
                    </Text>

                    <Text style={styles.p}>
                        Os Dados são mantidos pelo período necessário para prestar o serviço solicitado pelo Usuário, ou pelos fins descritos neste documento, e o Usuário pode sempre solicitar o Controlador de Dados para que os suspenda ou remova.
                    </Text>
                </View>

                <View>
                    <Text style={styles.h2}>
                        1.3 O Uso dos Dados Coletados
                    </Text>

                    <Text style={styles.p}>
                        Os Dados relativos ao Usuário são coletados para permitir que o Proprietário forneça os serviços, bem como para os seguintes propósitos: Gerenciamento de contactos e envio de mensagens, Registro e autenticação e Acesso a contas de serviços de terceiros.
                    </Text>

                    <Text style={styles.p}>
                        Os Dados Pessoais utilizados para cada finalidade estão descrito nas seções específicas deste documento.
                    </Text>
                </View>

                <View>
                    <Text style={styles.h2}>
                        1.4 Permissões do Facebook solicitadas por este Aplicativo
                    </Text>

                    <Text style={styles.p}>
                        Este Aplicativo pode pedir algumas permissões no Facebook que permitem realizar ações com a conta do usuário no Facebook e para recuperar as informações, incluindo dados pessoais. Este serviço permite que este Aplicativo se conecte com a conta do Usuário na rede social Facebook, fornecido pelo Facebook Inc.
                    </Text>

                    <Text style={styles.p}>
                        Para mais informações sobre as seguintes permissões, consulte a <Text style={styles.link} onPress={() => Linking.openURL('https://developers.facebook.com/docs/authentication/permissions/')}>documentação de permissões Facebook</Text> e a <Text style={styles.link} onPress={() => Linking.openURL('https://www.facebook.com/about/privacy/')}>política de privacidade do Facebook</Text>.
                    </Text>

                    <Text style={styles.p}>
                        As permissões solicitadas são as seguintes: E-mail e Informações básicas.
                    </Text>
                </View>

                <View>
                    <Text style={styles.h2}>
                        1.5 Informações detalhadas sobre o processamento de Dados Pessoais
                    </Text>

                    <Text style={styles.p}>
                        Os Dados Pessoais são recolhidos para os seguintes fins e utilizando os seguintes serviços:
                    </Text>

                    <Text style={styles.h3}>
                        1.5.1 Registro e autenticação
                    </Text>

                    <Text style={styles.p}>
                        Ao se registrar ou autenticar, os Usuários permitem a este serviço (este Aplicativo) identificá-los e dar-lhes o acesso a serviços dedicados. Dependendo do que estiver descrito abaixo, os serviços de registro e autenticação podem ser fornecidos por terceiros. Neste caso, este Aplicativo poderá acessar alguns Dados armazenados por estes serviços de terceiros para fins de registro ou identificação.
                    </Text>

                    <Text style={styles.h4}>
                        1.5.1.1 Facebook Authentication (Facebook, Inc.)
                    </Text>

                    <Text style={styles.p}>
                        O Facebook Authentication é um serviço de registro e autenticação fornecido pelo Facebook, Inc. e está conectado à rede social Facebook.
                    </Text>

                    <Text style={styles.p}>
                        Dados Pessoais coletados: vários tipos de Dados como especificados na política de privacidade do serviço.
                    </Text>

                    <Text style={styles.p}>
                        Lugar de processamento: EUA – <Text style={styles.link} onPress={() => Linking.openURL('https://www.facebook.com/help/405977429438260')}>Política de Privacidade</Text>.
                    </Text>

                    <Text style={styles.h3}>
                        1.5.2 Gerenciamento de contatos e envio de mensagens
                    </Text>

                    <Text style={styles.p}>
                        Esses tipos de serviços permitem o gerenciamento da base de dados de contatos de e-mail, telefones ou outra informação de contato para comunicação com o Usuário.
                    </Text>

                    <Text style={styles.p}>
                        Estes serviços também podem ser usados para coletar dados referentes à data e o horário em que o Usuário visualizou o e-mail; e também quando o Usuário interagiu com o e-mail recebido, como por exemplo, quando o Usuário selecionou os links incluídos no e-mail.
                    </Text>

                    <Text style={styles.h4}>
                        1.5.2.1 Firebase Notifications (Google Inc.)
                    </Text>

                    <Text style={styles.p}>
                        O Firebase Notifications é um serviço de envio de mensagens fornecido pela Google Inc. O Firebase Notifications pode ser integrado com o Firebase Analytics para se direcionar a públicos baseados em analítica e rastrear eventos de aberturas e conversões.
                    </Text>

                    <Text style={styles.p}>
                        Dados Pessoais coletados: vários tipos de Dados como especificados na política de privacidade do serviço.
                    </Text>

                    <Text style={styles.p}>
                        Lugar de processamento: EUA – <Text style={styles.link} onPress={() => Linking.openURL('https://www.google.com/intl/pt-BR/policies/privacy/')}>Política de Privacidade</Text>.
                    </Text>

                    <Text style={styles.h4}>
                        1.5.2.2 Firebase Realtime Database (Google Inc.)
                    </Text>

                    <Text style={styles.p}>
                        O Firebase Realtime Database é um banco de dados hospedado na nuvem. Os dados são armazenados como JSON e sincronizados em tempo real com todos os clientes conectados. Quando você cria apps em plataformas cruzadas com nossos SDKs para iOS, Android e JavaScript, todos os clientes compartilham uma instância do Realtime Database e recebem automaticamente atualizações com os dados mais recentes.
                    </Text>

                    <Text style={styles.p}>
                        Lugar de processamento: EUA – <Text style={styles.link} onPress={() => Linking.openURL('https://www.google.com/intl/pt-BR/policies/privacy/')}>Política de Privacidade</Text>.
                    </Text>
                </View>

                <View style={styles.lastItem}>
                    <Text style={styles.h2}>
                        1.6 Informações adicionais sobre a coleta e processamento de Dados
                    </Text>

                    <Text style={styles.h3}>
                        1.6.1 Ação jurídica
                    </Text>

                    <Text style={styles.p}>
                        Os Dados Pessoais dos Usuários podem ser utilizados para fins jurídicos pelo Controlador de Dados em juízo ou nas etapas conducentes à possível ação jurídica decorrente de uso indevido deste serviço (este Aplicativo) ou dos serviços relacionados.
                    </Text>

                    <Text style={styles.p}>
                        O Usuário declara estar ciente de que o Controlador dos Dados poderá ser obrigado a revelar os Dados Pessoais mediante solicitação das autoridades governamentais.
                    </Text>

                    <Text style={styles.h3}>
                        1.6.2 Informações adicionais sobre os Dados Pessoais do Usuário
                    </Text>

                    <Text style={styles.p}>
                        Além das informações contidas nesta política de privacidade, este Aplicativo poderá fornecer ao Usuário informações adicionais e contextuais sobre os serviços específicos ou a coleta e processamento de Dados Pessoais mediante solicitação.
                    </Text>

                    <Text style={styles.h3}>
                        1.6.3 As informações não contidas nesta política
                    </Text>

                    <Text style={styles.p}>
                        Mais detalhes sobre a coleta ou processamento de Dados Pessoais podem ser solicitados ao Controlador de Dados, a qualquer momento. Favor ver as informações de contato no início deste documento.
                    </Text>

                    <Text style={styles.h3}>
                        1.6.4 Os direitos dos Usuários
                    </Text>

                    <Text style={styles.p}>
                        Os Usuários têm o direito de, a qualquer tempo, consultar o Controlador de Dados para saber se os seus Dados Pessoais foram armazenados e saber mais sobre o conteúdo e origem, verificar a sua exatidão ou para pedir que sejam complementados, cancelados, atualizados ou corrigidos, ou que sejam transformados em formato anônimo ou bloquear quaisquer dados mantidos em violação da lei, bem como se opor ao seu tratamento por quaisquer todas as razões legítimas. Os pedidos devem ser enviados para o Controlador de Dados usando a informação de contato fornecida acima.
                    </Text>

                    <Text style={styles.p}>
                        Este Aplicativo não suporta pedidos de “Não Me Rastreie”.
                    </Text>

                    <Text style={styles.p}>
                        Para determinar se qualquer um dos serviços de terceiros que utiliza honram solicitações de “Não Me Rastreie”, por favor leia as políticas de privacidade.
                    </Text>

                    <Text style={styles.h3}>
                        1.6.5 Mudanças nesta política de privacidade
                    </Text>

                    <Text style={styles.p}>
                        O Controlador de Dados se reserva o direito de fazer alterações nesta política de privacidade a qualquer momento, mediante comunicação aos seus Usuários nesta página. É altamente recomendável que esta página seja consultada várias vezes em relação à última modificação descrita na parte inferior. Se o Usuário não concorda com qualquer das alterações da Política de Privacidade, o Usuário deve cessar o uso deste serviço (este Aplicativo) e pode solicitar ao Controlador de Dados que apague os Dados Pessoais. Salvo disposição em contrário, a atual política de privacidade se aplica a todos os Dados Pessoais dos Usuários que o Controlador de Dados tiver.
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

export default PrivacyPolicy;
