import { motion } from "framer-motion";
import { Heart, Eye, Star } from "lucide-react";
import clinicaImg from "@/assets/clinica.jpeg";
import profissional1 from "@/assets/profissional_1.jpg";

const values = [
  { icon: Heart, title: "Missão", desc: "Oferecer cuidado especializado de excelência, unindo ciência, humanização e tecnologia para transformar vidas." },
  { icon: Eye, title: "Visão", desc: "Ser referência nacional em enfermagem especializada, reconhecida pela qualidade técnica e atendimento humanizado." },
  { icon: Star, title: "Valores", desc: "Ética, respeito, inovação, compromisso com o paciente e busca constante pela excelência profissional." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two columns: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Sobre a Clínica</span>
            <h2 className="section-title !text-left">
              Uma Trajetória de Dedicação e Cuidado
            </h2>
            <div className="premium-divider !mx-0" />

            <div className="space-y-5 mt-8 text-[15px] sm:text-base text-muted-foreground leading-[1.7] font-sans">
              <p>
                A Integral Clínica de Enfermagem Especializada nasceu da experiência prática e do compromisso com um
                cuidado mais humano, resolutivo e especializado no tratamento de feridas. Localizada em Cabo Frio, a
                clínica se consolidou como referência na Região dos Lagos por unir conhecimento técnico, tecnologia e
                um olhar individualizado para cada pessoa.
              </p>
              <p>
                À frente da Integral está a Dra Viviane Paz Torres, Enfermeira Estomaterapeuta, com mais de 15 anos de
                experiência na área de feridas e no acompanhamento de pessoas que precisam de um tratamento eficaz e
                contínuo. Viviane também atua como responsável técnica do Serviço de Atenção à Pessoa com Estomia da
                Baixada Litorânea há mais de 12 anos.
              </p>
              <p>
                Seu trabalho é marcado pela escuta, pelo cuidado próximo e pela busca constante de atualização e
                soluções que realmente façam diferença no processo de recuperação de cada pessoa atendida. A Integral
                nasce com esse propósito, oferecer um atendimento especializado, acessível e humano, sendo lembrada
                como referência sempre que alguém precisar de tratamento de feridas com segurança, ciência, tecnologia e
                confiança.
              </p>
            </div>

            {/* Professional Card */}
            <div className="mt-10 p-6 sm:p-7 rounded-md bg-muted/50 border-l-4 border-l-gold border border-border/30">
              <div className="flex items-start gap-4">
                <img
                  src={profissional1}
                  alt="Enf.ª Viviane Paz Torres"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-gold/30"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-base text-foreground font-serif">Enf.ª Viviane Paz Torres</p>
                  <p className="text-[11px] uppercase tracking-[0.12em] gold-text font-medium mt-1 font-sans">
                    Fundadora & Diretora Clínica
                  </p>
                  <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed font-sans">
                    Viviane Paz Torres é enfermeira, estomaterapeuta formada pela UERJ, enfermeira com habilitação em Podiatra e fundadora da Integral, Clínica de Enfermagem Especializada em Cabo Frio. Com mais de uma década de atuação na enfermagem, construiu sua trajetória com foco no tratamento de feridas, cuidado com pessoas com estomias e uso de tecnologias avançadas, unindo ciência, experiência e um olhar individualizado em cada atendimento. Também atua na formação de profissionais da saúde, é speaker da Coloplast na área de Ostomy Care e participou como coautora do Manual Clínico para Enfermeiros: Estomia de eliminação em pessoas adultas da Coloplast e do livro Gestão de Serviços de Atenção à Saúde da Pessoa com Estomia, contribuindo para o avanço da prática profissional. À frente da Integral, Viviane promove mais do que assistência, entrega qualidade de vida, autonomia e confiança para cada pessoa acompanhada.
                  </p>
                </div>
              </div>
              <p className="text-[14px] sm:text-[15px] italic text-foreground/70 mt-5 border-t border-border/30 pt-5 font-serif leading-relaxed">
                "A excelência no cuidar é a nossa maior responsabilidade."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={clinicaImg}
              alt="Fachada da Integral Clínica de Enfermagem"
              className="rounded-md w-full h-[400px] sm:h-[500px] object-cover border border-gold/20 shadow-lg hover:shadow-xl transition-shadow duration-500"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="premium-card p-7 sm:p-8 text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                <v.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-foreground font-serif mb-3">{v.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed font-sans">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
