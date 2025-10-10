// app/about/page.tsx
import React from "react";
import Image from "next/image";
import { SiAmazon, SiC, SiCplusplus, SiGithub, SiPython, SiTerraform } from "react-icons/si";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-transparent font-sans z-10">
      <Card className="max-w-4xl w-full mx-auto p-6 bg-neutral-950 border border-neutral-800 text-neutral-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold tracking-tight">
            About Me
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Ảnh + thông tin cá nhân */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Image
              src="/images/avatar.png"
              alt="My avatar"
              width={180}
              height={180}
              className="rounded-full shadow-md"
            />

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="font-semibold">Nhân</span>, second-year
                student majoring in Intelligent Embedded Systems and IoT.
              </p>
              <p>
                I'm currently focused on Cloud services (such as AWS) with a
                strong interest in pursuing the Solution Architect path.
              </p>
              <p>
                Outside of IT skills, I am able to use up to three languages:
                <span className="font-semibold"> Vietnamese (Mother tongue), </span>
                <span className="font-semibold"> English (IELTS 7.0), </span>
                <span className="font-semibold"> Japanese (N4). </span>
              </p>
            </div>
          </div>

          {/* Section thêm */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
              <li>🌐 Fundamental Networking</li>
              <div className="flex items-center gap-2">
                <SiC className="w-6 h-6 text-blue-500" />
                <SiCplusplus className="w-6 h-6 text-blue-500" />
                <SiPython className="w-6 h-6 text-[#3776AB]" />
                <span>
                  C, C++, Python
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SiGithub className="w-6 h-6 text-white-500" />
                <span>Git</span>
              </div>
              <li>📚 English(C1) / Japanese (N4)</li>
              <div className="flex items-center gap-2">
                <SiAmazon className="w-6 h-6 text-orange-500" />
                <span>AWS (EC2, S3, Lambda)</span>
              </div>
              <div className="flex items-center gap-2">
                <SiTerraform className="w-6 h-6 text-purple-500" />
                <span>IaS Terraform (AWS)</span>
              </div>
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
};

export default About;
