FROM ubuntu
MAINTAINER Xenwar Hassen

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y iputils-ping
RUN apt-get install -y apt-utils
RUN apt-get install -y fprobe
RUN apt-get install -y apache2
RUN systemctl enable apache2
RUN apt-get install -y tree vim net-tools
RUN apt-get install -y wget
RUN apt-get install -y nfdump

RUN mkdir /netflow_output_csv
#fprobe -iany -f"tcp&&port 80" localhost:2055
#mkdir tmp
#cd tmp/
#nfcapd -E  -p 2055 -l ./ &
#wget http://localhost
#docker run -it image_id #as shown in docker images
